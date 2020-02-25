import Query from "../models/Query";
import Utils from './Utils';
import config from '../config.json';
//let config = require('../config.json');

export default class NavControls {

    static loadCardTypes = function () {

        return config.cardViews;
    }

    static currentCardView = function (app)
    {
        let cards = app.getUIConfig("cards");
        for(let i in config.cardViews)
        {
            if(config.cardViews[i].key===cards)
            {
                let returnval = {label : config.cardViews[i].label, value : cards};
                return returnval;
            } 
        } 
        return {label : "None"};
    }

    static loadProducts = function () {

        return config.products;
    }



    static loadUserTypes = function (app) {

        let userTypes = [];
        let tablesWithUsers = ["story","theme","feature"];
        for(let i in tablesWithUsers)
        {
            let key = tablesWithUsers[i];
            let field = config.elements[key].valueFields.usertype;
            let query = new Query({ app: app, query: key, limit: null });
            let user_types = query.objects.map(item => item.data[field]);
            for(let j in user_types)
            {
                let type = user_types[j];
                if(!Array.isArray(type)) type = [type];
                for(let k in type) userTypes.push(type[k]);
            }
        }
        userTypes = Utils.dedupe(userTypes);
        userTypes = Utils.sortFieldArray(userTypes,"usertype");
        userTypes = ["—Any User Type—"].concat(userTypes);
        return userTypes;
    }

    static currentUserType = function (app) {
        let type =  this.getUserType(app);
        if(type===undefined) return "—Any User Type—"
        return type;
    }

    static setUserType = function (val) {
        this.deleteFilter("usertype");
        if (val === "—Any User Type—") return false;
        this.setFilter("usertype", [val], "whitelist");
    }

    static getUserType = function (app) {
        let userfilter = app.getFilter("usertype");
        return userfilter.criteria[0];
    }



    //VERTICALS


    static loadVerticals = function (app) {

        let verticalQuery = new Query({ app: app, query: "story", map: "vertical" }); //, limit:null
        let verticals = verticalQuery.objects.map(item => (
            { "value": item.data.id, "label": item.data.Vertical, badges: ["X Themes"] }
        ))
        verticals.push({ label: "—Any Vertical—", value: null });
        return verticals.reverse();
    }

    static currentVertical = function (app) {

        let id = NavControls.getVertical(app);
        let objects = NavControls.loadVerticals(app);
        for (let i in objects) if (id === objects[i].value) return objects[i];
        return objects[0];
    }

    static setVertical = function (selection) {

        this.deleteFilter("vertical");
        if (selection.value===null) return false;
        this.setFilter("vertical", [selection.value], "whitelist");
    }

    static getVertical = function (app) {
        let vertfilter = app.getFilter("vertical");
        return vertfilter.criteria[0];
    }

    static loadFilters = function () {
        return config.multiSelectFilters;

    }

    static currentFilter = function (app) {

        let filters = config.multiSelectFilters;
        let currentKey = app.state.config.ui.filter;
        for (let i in filters) if (currentKey === filters[i].key) return filters[i];
        return filters[0];
    }

    static setFilter = function (val) {

        let filters = config.multiSelectFilters;
        for (var i in filters) this.deleteFilter(filters[i].key);
        this.setUIConfig("filter", val.key);
    }




    static getCardView = function (app) {
        app.getUIConfig("cards");
    }
    static setCardView = function (val) {

        this.setUIConfig("cards", val.key);
        this.setUIConfig("grouping", null);
    }


    static multiSelect = function (app, key, a) {
        let currentKey = app.state.config.ui.filter;


        let functions = {
            title: "Business Objectives",
            label: this.labelBusinessObjectives(app),
            options: this.loadBusinessObjectives(app),
            selected: this.selectedBusinessObjectives(app),
            onSelect: this.onSelectBusinessObjective.bind(app),
            onDeselect: this.onDeselectBusinessObjective.bind(app)
        }

        if (currentKey === "painpoint") {
            functions = {
                title: "Pain Points",
                label: this.labelPainPoints(app),
                options: this.loadPainPoints(app),
                selected: this.selectedPainPoints(app),
                onSelect: this.onSelectPainPoint.bind(app),
                onDeselect: this.onDeselectPainPoint.bind(app)
            }
        }
        return functions[key];
    }

    //Business Objective Functions


    static labelBusinessObjectives = function (app) {

        let count = this.selectedBusinessObjectives(app).length;
        if (count === 0) return "Select Business Objectives";
        return count + " Business Objective" + ((count > 1) ? "s" : "");

    }
    static loadAllBusinessObjectives = function (app) {
        let objectiveQuery = new Query({ app: app, query: "objective" });
        return objectiveQuery.objects.map(item => (
            { "value": item.data.id, "label": item.data.Objective, type: "objective" }
        ))
    }
    static loadBusinessObjectives = function (app) {
        let objectiveQuery = new Query({ app: app,  query: "story", map: "objective", limit:["vertical","usertype"] } );
        return objectiveQuery.objects.map(item => (
            { "value": item.data.id, "label": item.data.Objective, type: "objective" }
        ))
    }
    static selectedBusinessObjectives = function (app) {

        let filter = app.getFilter("objective");
        return filter.criteria;

    }
    static onSelectBusinessObjective = function (selection) {

        let filter = this.getFilter("objective");
        filter.criteria.push(selection.value);
        let criteria = Utils.dedupe(filter.criteria);
        this.setFilter("objective", criteria, "whitelist");
    }

    static onDeselectBusinessObjective = function (selection) {
        let filter = this.getFilter("objective");
        let criteria = Utils.removeFromArray(filter.criteria, selection.value);
        this.setFilter("objective", criteria, "whitelist");
    }


    //Pain Point Functions


    static labelPainPoints = function (app) {

        let count = this.selectedPainPoints(app).length;
        if (count === 0) return "Select Pain Points";
        return count + " Pain Point" + ((count > 1) ? "s" : "");

    }
    static loadPainPoints = function (app) {

        let painPointQuery = new Query({ app: app, query: "story", map: "painpoint", limit: ["vertical","usertype"] });
        let tmp = painPointQuery.objects.map(item => (
            { "value": item.data.id, "label": item.data['Pain Point'] }
        ))
        return tmp;
    }
    static selectedPainPoints = function (app) {

        let filter = app.getFilter("painpoint");
        return filter.criteria;

    }
    static onSelectPainPoint = function (selection) {

        let filter = this.getFilter("painpoint");
        filter.criteria.push(selection.value);
        let criteria = Utils.dedupe(filter.criteria);
        this.setFilter("painpoint", criteria, "whitelist");
    }

    static onDeselectPainPoint = function (selection) {
        let filter = this.getFilter("painpoint");
        let criteria = Utils.removeFromArray(filter.criteria, selection.value);
        this.setFilter("painpoint", criteria, "whitelist");
    }


    static loadCardGroups = function () {

        return config.cardViews;
    }


    static cookbookisOpen(app) {
        return app.getUIState("cookbook").isOpen;
    }

    static onClickCookbook() {
        this.setUIState("cookbook", { isOpen: true });
    }

    static cookbookisClosed()
    {
        this.setUIState("cookbook", { isOpen: false });
    }


}
