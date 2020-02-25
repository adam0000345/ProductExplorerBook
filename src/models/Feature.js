
import BaseElement from './BaseElement';
import Utils from '../controllers/Utils';
export default class Feature extends BaseElement {


    constructor(item, app) {
        super("feature", app, item);
    }


    buildBlocks() {
        return [];
    }

    cardPreview() {
        let preview = {};
        preview.type = "status";
        if (Utils.isEmpty(this.data.Timeframe)) return null;
        if (this.data.Timeframe==="Done") {
            preview.done = true;
            preview.label = "Released";
            preview.version = "0.6";
            preview.date = "2019-12-29";
        }
        else {
            preview.done = false;
            preview.label = "In Progress";
            preview.timeframe = this.data.Timeframe;
            preview.timeframeColor = Utils.getLabelColor(preview.timeframe);
        }
        preview.icons = [{
            label: "iOS",
            icon: "ios",
            url: "https://github.com/sendbird/quickstart-calls-android"
        }];
        return preview;

    }
}