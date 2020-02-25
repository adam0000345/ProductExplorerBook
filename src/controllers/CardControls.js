
import Query from "../models/Query";
import config from '../config.json';
import Utils from "./Utils";

export default class CardControls {

    static loadCards = function (app) {

        let query = "story"; //All queries go through user stories
        let map = app.state.config.ui.cards;
        //map = "theme"; //force theme cards
        let queryObj = new Query({app:app,query:query,map:map}); 
        //console.log({ app: app, query: query, map: map },queryObj); 
        let items = queryObj.filteredObjects();
        return items.map(item => { return item.loadCardData() });


    }

    static loadCard = function (state) {

        return {}

    }


    static loadCardsHeading(app,cards) {

        let views = config.cardViews;
        let currentView = app.state.config.ui.cards;

        let view = views[0]
        for (let i in views) if (currentView === views[i].key) view = views[i];

        let s = (cards.length!==1) ? "s" : "";
        let counter = cards.length+ " " +view.counter + s;

        let heading = CardControls.prepareHeading(app,view.heading,view)

        return {
            heading: heading,
            counter: counter
        }

    }

    static prepareHeading(app,heading,view)
    {
        if(!heading.match(/{{_}}/)) return heading;
        let sides = heading.split("{{_}}");

        let headingvariable = view.headingvariable;
        let filter = app.getFilter(headingvariable);

        let variable = filter.criteria[0];
        if(Utils.isEmpty(variable)) variable =  view.headingdefaultvariable;
 
        return  sides[0]+Utils.lowerCase(variable)+sides[1];
    }


    static onClickCard(item)
    {
        this.setUIState("infoBox", { isOpen: true,  type: item.type, id: item.id});
    }


    static loadCardView(app)
    {
        let type = app.state.config.ui.cards;
        for(let i in config.cardViews)
            if(config.cardViews[i].key===type) return  config.cardViews[i]
        return null;
    }

    static loadCardGroupings(app)
    {
        let cardView = this.loadCardView(app);
        if(cardView===null) return null;
        let cardKey = cardView.key;
        let groupings = config.elements[cardKey].valueFields;
        let output = [{ label: "—None—",key:null}];
        for (let i in groupings) output.push({ label: groupings[i],key:i});
        return output;
    }

    static loadCardGrouping(app) {
        return app.getUIConfig("grouping");
    }

    static loadGroupingFieldFromKey(elementKey,groupkey) {
        
        return config.elements[elementKey].valueFields[groupkey];


    }

    static currentCardGrouping(app)
    {
        let key = app.getUIConfig("grouping");
        let card = app.getUIConfig("cards");
        let val =  config.elements[card].valueFields[key];
        if(Utils.isEmpty(val)) return {label:"—None—",value:null};
        return {label:val,value:key};
    }

    static currentCardLabel(app)
    {
        let key = app.getUIConfig("label");
        let card = app.getUIConfig("cards");
        let val =  config.elements[card].valueFields[key];
        if(Utils.isEmpty(val)) return {label:"—None—",value:null};
        return {label:val,value:key};
    }

    static loadCardGroups(app,cards)
    {
        let grouping = this.loadCardGrouping(app);
        if(grouping===null) return [null];
        let fields = [];
        for(let i in  cards)
        {
            let groupingField = this.loadGroupingFieldFromKey(cards[i].type,grouping);
            let items = cards[i].fields[groupingField];
            if(items===undefined) continue;
            if(!Array.isArray(items)) items = [items];
            fields = fields.concat(items);
        }
        fields = Utils.dedupe(fields);
        fields = Utils.sortFieldArray(fields,grouping);
        return fields;
    }

    static cardNotInGroup(app,card,group)
    {
        if(group===null) return false;
        let groupingKey = app.state.config.ui.grouping;
        if (groupingKey===null) return false;
        let groupingField = config.elements[card.type].valueFields[groupingKey];
        let fields = card.fields[groupingField];
        if(!Array.isArray(fields)) fields = [fields];
        if(fields.indexOf(group)<0) return true;
    }

    static groupCards(selection)
    {
        this.setUIConfig("grouping", selection.key);
    }



    static loadCardLabels(app) {
        return this.loadCardGroupings(app);
    }
    static labelCards(selection) {
        this.setUIConfig("label", selection.key);
    }
    static hasLabel(app)
    {
        return app.getUIConfig("label")!==null
    }

    static getCardLabel(app,card) {
        let selectedLabelKey = app.state.config.ui.label;
        let cardType = card.type;
        if (config.elements[cardType].valueFields[selectedLabelKey] === undefined) return null;
        let cardLabelField = config.elements[cardType].valueFields[selectedLabelKey];
        let labelValue = card.fields[cardLabelField];

        if(Array.isArray(labelValue)) labelValue = labelValue.join(", ");

        return { label: labelValue, color: Utils.getLabelColor(labelValue)}
    }


    static buildHeading(item)
    {
        let fieldtoHighlight = config.elements[item.type].highlight;
        if(Utils.isEmpty(fieldtoHighlight)) return {heading:item.heading};
        return {heading:item.heading,highlight:item.fields[fieldtoHighlight]};
        
    }

}