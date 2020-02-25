
import Utils from './Utils';
import SearchControls from './SearchControls';

export default class AppController {


    static loadMasterData() {
        return fetch("./data/calls.json")
            .then(response => response.json())
            .then(json => {
                const data = {};
                for (let key in json) {
                    if (data[key] === undefined) {
                        data[key] = [];
                    }
                    for (let i in json[key]) {
                        const item = json[key][i];
                        item.fields.id = item.id;
                        data[key][i] = item.fields;
                        if (!data.idIndex) {
                            data.idIndex = {};
                        }
                        data.idIndex[item.id] = [key, parseInt(i)];
                    }
                }
                //console.log("[LOG] data", data);
                this.setState({ masterData: data });
                //this.setState({ masterData: data }, () => setTimeout(this.loadMasterData.bind(this), 60000))
            });
    }


    static inputScratch(key, val) {
        let state = this.state;
        if (Array.isArray(state.scratch[key])) {
            state.scratch[key].push(val);
            state.scratch[key] = Utils.dedupe(state.scratch[key]);
        }
        else {
            state.scratch[key] = val;
        }
        this.setState(state);
    }

    static setUIConfig(key, val) {
        let state = this.state;
        state.config.ui[key] = val;
        this.setState(state, function () {
             //console.log("NEW CONFIG",this.state.config);
        });
    }

    static getUIState(key, val) {
        let state = this.state;
        return state.state.ui[key];
    }

    static setUIState(key, val) {
        let state = this.state;
        state.state.ui[key] = val;
        this.setState(state, function () {
            // console.log("NEW CONFIG",this.state.config);
        });
    }

    static getUIConfig(key, val) {
        let state = this.state;
        return state.config.ui[key];
    }

    static setFilter(field, criteria, type) {


        if (field === undefined) return false;
        if (type === undefined) type = "blacklist";
        if (criteria === undefined) criteria = [];

        let filters = this.state.config.filters;
        let found = false;
        if (filters === undefined) filters = [];
        filters.forEach((filter, i) => {
            if (filter.field === field) {
                found = true;
                filters[i] = { field: field, criteria: criteria, type: type }
            }
        });
        if (found === false) {
            filters.push({ field: field, criteria: criteria, type: type });
        }
        let state = this.state;
        state.config.filters = filters;
        this.setState(state);
    }

    static getFilter(field) {
        let filters = this.state.config.filters;
        for (let i in filters) {
            if (filters[i].field === field) return filters[i];
        }
        return { field: field, criteria: [], type: "whitelist" };
    }
    static deleteFilter(field) {
        let filters = this.state.config.filters;
        let newfilters = [];
        for (let i in filters) {
            if (filters[i].field === field) continue;
            newfilters.push(filters[i]);
        }
        let state = this.state;
        state.config.filters = newfilters;
        this.setState(state);
    }

    static getItemFromIndex(id) {
        try {
            if (typeof id === "object") {
                return id;
            }
            const index = this.state.masterData.idIndex[id];
            return index === undefined ? null : this.state.masterData[index[0]][index[1]];
        } catch (e) {
            if (this.log) {
                console.log(
                    `[SEVERE] getting item from index by id ${id} did not succeed `,
                    this.state.masterData,
                    e
                );
            }
        }
    }

    static loadConfigs(configs)
    {
        let state = this.state;
        state.config.filters=configs.config.filters;
        state.config.ui=configs.config.ui;
        state.state.ui.cookbook.isOpen=false;
        state.state.ui.infoBox.isOpen=false;
        state.state.ui.search.isOpen=false;
        this.setState(state);
    }

    static onKeyDown(keyEvent) {
        
        if(keyEvent.metaKey) return null;
        if(keyEvent.ctrlKey ) return null;
        if(keyEvent.code === "Escape") return null;
        if(keyEvent.code === "Enter") return AppController.onEnter(this);
        if(keyEvent.code === "ArrowUp") return AppController.onUp(this);
        if(keyEvent.code === "ArrowDown") return AppController.onDown(this);

        let searchState = this.getUIState("search");
        if (/^[0-9A-z]$/.test(keyEvent.key) && !searchState.isOpen) {

            this.setUIState("search", {
                isOpen: true,
                query: null,
                index: null
            })
        }
    }


    static onDown(app) {
        SearchControls.onMoveDown(app);
    }
        
    static onUp(app) {

        SearchControls.onMoveUp(app);
    }
        
    static onEnter(app)
    {
        SearchControls.onSelect(app)
    }


    static buildURL()
    {

    }

}
