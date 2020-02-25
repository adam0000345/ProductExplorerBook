
import BaseElement from './BaseElement';
export default class Theme extends BaseElement {

    constructor(item, app) {
        super("theme", app, item);
    }


    buildBlocks() {
        let blocks = [];
        blocks.push({ type: "subthemes", content: this.getLinkedObjects("subtheme") });
        blocks.push({ type: "stories", content: this.getLinkedObjects("story") });
        blocks.push({ type: "features", content: this.getLinkedObjects("feature") });
        return blocks;
    }


    cardPreview()
    {
        let subthemes = this.loadSubthemeTree();
        let preview = {};
        preview.type = "tree";
        preview.buttonNumber = subthemes.length
        preview.buttonLabel = "Subtheme" + ((subthemes.length === 1) ? "" : "s");
        preview.tree=subthemes
        return preview;

    }

    loadSubthemeTree()
    {
        let base = this.getLinkedObjects("subtheme");
        return base;
    }

}