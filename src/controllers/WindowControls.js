import Query from "../models/Query";
import Utils from "./Utils";
export default class WindowControls {

    static isOpen = function (app) {

        return app.getUIState("infoBox").isOpen;
    }

    static isClosed = function () {

        this.setUIState("infoBox", { isOpen: false })
    }

    static loadWindowContent = function(app)
    {

        let infoBox = app.getUIState("infoBox")
        let type = infoBox.type;
        let id = infoBox.id;
        if(type===null) return {title:null};
        let q = new Query({app:app,query:type,selector:{id:id}})
        let object = q.objects[0]; //Should only be 1 returned if selected for by ID
        if(Utils.isEmpty(object)) return {};
        return object.infoBox();

    }


    static openItemInBox(type,id)
    {
        this.setUIState("infoBox", { isOpen: true,  type: type, id: id});
    }

}