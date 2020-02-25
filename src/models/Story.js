
import BaseElement from './BaseElement';

export default class Story extends BaseElement {

    constructor(item, app) {
        super("story", app, item);
    }



    buildBlocks() {
        return [];
    }



}