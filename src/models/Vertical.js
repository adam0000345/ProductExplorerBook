
import BaseElement from './BaseElement';
export default class Vertical extends BaseElement {


    constructor(item, app) {
        super("vertical", app, item);
    }

    infoBox() { //Details

        let blocks = [];

        return {
            type: this.typekey,
            title: this.data[this.titlekey],
            titleLabel: this.tagline,
            blocks: blocks
        };
    }

}