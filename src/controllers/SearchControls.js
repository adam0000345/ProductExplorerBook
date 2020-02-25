import Query from "../models/Query";
import Utils from "./Utils";
import config from '../config.json';
export default class SearchControls {

    static isOpen = function (app) {

        let state = app.getUIState("search");
        return state.isOpen;
    }

    static isClosed = function () {

        this.setUIState("search", { isOpen: false })
    }


    static searchResults = function(app)
    {
        
        let state = app.getUIState("search");
        let query = state.query;

        if(Utils.isEmpty(query)) return null;
        if(query.length<3) return 1;

        let results = this.loadAllItems(app);
        return SearchControls.filterResults(app,results,query);
    }



    static loadAllItems = function (app) {

        let elements = config.elements;
        let items = [];
        for (let key in elements) {
            let query = new Query({ app: app, query: key });
            let fieldkey = config.elements[key].field;
            if (config.elements[key].searchfield !== undefined) fieldkey = config.elements[key].searchfield;
            let segment = query.objects.map(item => (
                { "value": item.data.id, "label": item.data[fieldkey], type: key, badge: config.elements[key].label, color: config.elements[key].color }
            ))
            items = items.concat(segment);
        }
        return items;
    }


    static filterResults = function (app,results,query) {
        let filtered = [];
        let regex = new RegExp(query,'ig');
        for(let i in results)
        {
            if (regex.test(results[i].label)) 
                filtered.push(results[i]);
        }

       // let search = app.getUIState("search");
        return filtered;
    }

    static selectSearchResult = function (selection) {


    }

    static onChange = function (event) {
        this.setUIState("search", { isOpen: true, query: event.target.value, index: 0, count: 0 });
    }



    static onMoveDown = function (app) {
        let search = app.getUIState("search");
        search.index++;
        if(search.index>(search.count-1)) search.index = 0;
        app.setUIState("search", search);
    }


    static onMoveUp = function (app) {
        let search = app.getUIState("search");
        search.index--;
        if(search.index<0) search.index = 0;
        app.setUIState("search", search);
    }


    static onSelect = function (app) {

        let search = app.getUIState("search");
        if(!search.isOpen) return false;
        let selection = SearchControls.searchResults(app)[search.index];

        let state = app.state;

        state.state.ui.search= {
            isOpen: false,
            query: null,
            index: null,
            count: null
          };
          state.state.ui.infoBox= {
            isOpen: true,
            type: selection.type,
            id: selection.value
          };

          app.setState(state);

    }



}