
//import Utils from '../controllers/Utils';
import Query from './Query';
import config from '../config.json';

export default class BaseElement {

    constructor(type,app,item)
    {
        this.typekey = type;
        this.data = item;
        this.app = app;
        this.element = config.elements[this.typekey];
        this.titlekey = this.element.field
        this.idFields = this.element.idFields;
        this.tagline = this.element.tagline;
    }

    filter(filters) { return Query.filter(filters, this); }


    loadListData() {

        return {
            id: this.data.id,
            type: this.typekey,
            label: this.data[this.titlekey],
            data: this.data
        };
    }
    standardFilters()
    {
        return this.app.state.config.filters;
    }


    getLinkedObjects(type) //FROM idFields
    {
        if (this.data[this.idFields[type]] === undefined) return [];
        return this.data[this.idFields[type]].map((item_id, i) => {
            let object = Query.createObject(type,this.app.getItemFromIndex(item_id), this.app);
            if (object.filter(this.standardFilters())) return false;
            return object.loadListData();
        }).filter(i => (i));
    }

    getFieldValues(field) //FROM idFields
    {
        if (this.data[this.valueFields[field]] === undefined) return [];
        return this.data[this.valueFields[field]].map((value, i) => {
            if(false) return false; // TODO Needs a filter?
            return value;
        }).filter(i => (i));
    }


    loadCardData() {
        return {
            id: this.data.id,
            fields: this.data,
            type: this.typekey,
            heading: this.data[config.elements[this.typekey].field],
            preview: this.cardPreview(),
            infoBox: this.infoBox()
        };
    }


    infoBox() {

        let blocks = this.buildBlocks();

        return {
            type: this.typekey,
            title: this.data[this.titlekey],
            titleLabel: this.tagline,
            blocks: blocks
        };
    }

    cardPreview()
    {
        return null;
    }



}