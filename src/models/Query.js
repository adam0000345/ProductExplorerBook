
import Utils from '../controllers/Utils';
import Theme from './Theme';
import Subtheme from './Subtheme';
import Story from './Story';
import Vertical from './Vertical';
import Objective from './Objective';
import PainPoint from './PainPoint';
import Feature from './Feature';
import config from '../config.json';

export default class Query {

    constructor(parameters) {

        let { app, query, map, limit, selector } = parameters;
        this.app = app;
        let filter = this.buildFilter(app, limit, selector);
        let items = app.state.masterData[this.loadTableKey(query)];
        let objects = this.queryItems(query, items, filter);
        if (map === undefined)
            this.objects = objects;
        else
            this.objects = this.mapItems(map, objects, filter);
    }


    queryItems(type, items, filter) {
        if (type === undefined) return [];
        let filteredObjects = [];
        items.forEach(item => {
            let object = Query.createObject(type, item, this.app);
            if (!object.filter(filter)) filteredObjects.push(object)
        });
        return filteredObjects;
    }


    mapItems(map, objects, filter) {

        let all_mapped_ids = [];
        objects.forEach(object => {
            let mapped_ids = this.loadMappedIds(map,object);
            all_mapped_ids = all_mapped_ids.concat(mapped_ids)
        });
        all_mapped_ids = Utils.dedupe(all_mapped_ids);
        return this.loadObjectsFromIds(all_mapped_ids, map, filter);

    }

    loadTableKey(key) {
        if (config.elements[key] === undefined) return null;
        let tablekey = config.elements[key].table;
        return tablekey;
    }


    buildFilter(app, limit, selector)  //LIMIT is an array of fields to be chosen from the App filters
    {
        if (selector !== undefined)
            for (let i in selector)
                return [{ field: i, criteria: [selector[i]], type: "whitelist" }];
        else if (limit === null) return null;
        let appFilters = app.state.config.filters;
        //Process Whitelist
        if (!Utils.isEmpty(limit)) {
            if (!Array.isArray(limit)) limit = [];
            let newFilters = [];
            for (let i in appFilters)
                if (limit.indexOf(appFilters[i].field) >= 0) newFilters.push(appFilters[i]);
            if (limit.length > 0) appFilters = newFilters;
        }
        if (Utils.isEmpty(selector)) {

        }
        return appFilters;
    }


    loadObjectsFromIds(ids, type, filter) {
        ids = Utils.dedupe(ids);
        let objects = [];
        for (let i in ids) {
            let id = ids[i];
            let item = this.app.getItemFromIndex(id);
            let object = Query.createObject(type, item, this.app);
            if (object === null) continue;
            if (object.filter(filter)) continue;
            objects.push(object);
        }
        return objects;
    }



    static createObject(type, item, app) {

        if (type === "theme") return new Theme(item, app);
        if (type === "subtheme") return new Subtheme(item, app);
        if (type === "story") return new Story(item, app);
        if (type === "vertical") return new Vertical(item, app);
        if (type === "objective") return new Objective(item, app);
        if (type === "feature") return new Feature(item, app);
        if (type === "painpoint") return new PainPoint(item, app);
        console.log("Failed to create object of type: " + type);
        return null;
    }

    filteredObjects() {
        return this.objects;
    }


    static filter(filters, object) {
        if (Utils.isEmpty(filters)) return false;
        let results = filters.map(filter => {
            if (!Array.isArray(filter.criteria)) return 0;
            if (filter.criteria.length===0) return 0;
            let field = this.determineFieldToFilter(object.typekey, filter.field);
            if (Utils.isEmpty(field)) return 0;
            let candidates = object.data[field];
            if (Utils.isEmpty(candidates)) return 1;
            if (!Array.isArray(candidates)) candidates = [candidates];
            let intersection = candidates.filter(value => filter.criteria.includes(value));
            if (filter.type === "whitelist" && intersection.length === 0) return 1;
            if (filter.type === "blacklist" && intersection.length > 0) return 1;
            return 0;
        });
        let max = Math.max.apply(null, results)
        if (max > 0) return true;
        return false;
    }

    static determineFieldToFilter(type, key) {
        if(key==="id") return key;
        let element = config.elements[type];
        if (!Utils.isEmpty(element.valueFields)) {
            if (!Utils.isEmpty(element.valueFields[key]))
                return element.valueFields[key];
        }
        if (!Utils.isEmpty(element.idFields)) {
            if (!Utils.isEmpty(element.idFields[key]))
                return element.idFields[key];
        }
        return null;
    }

    loadMappedIds(map, object) {
        if (map === object.typekey) return [object.data.id];
        let idFields = config.elements[object.typekey].idFields;
        let key = idFields[map];
        let ids = object.data[key];
        if (ids === undefined) return [];
        return ids;
    }

}