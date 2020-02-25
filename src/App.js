import React, { Component } from 'react';
import Explorer from "./components/Explorer.js";
import AppController from './controllers/AppController';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.model = null;
    this.state = {
      masterData: null,
      config: {
        filters: [
          //{ field: "timeframe", criteria: ["Now", "Done"], type: "whitelist" },
          // { field: "timeframe", criteria: ["Done"], type: "blacklist" }
        ],
        ui: {
          cards: "theme",
          filter: "objectives",
          grouping: "supertheme",
          label: null,
        }
      },
      state: {
        width: 0,
        ui: {
          search: {
            isOpen: false,
            query: null,
            index: null,
            count: null
          },
          cookbook: {
            isOpen: false,
            content: null
          },
          infoBox: {
            isOpen: false,
            type: null,
            id: null
          }
        }
      }
    }
  }
  loadMasterData = AppController.loadMasterData.bind(this)
  setFilter = AppController.setFilter.bind(this)
  setUIConfig = AppController.setUIConfig.bind(this)
  getUIConfig = AppController.getUIConfig.bind(this)
  setUIState = AppController.setUIState.bind(this)
  getUIState = AppController.getUIState.bind(this)
  deleteFilter = AppController.deleteFilter.bind(this)
  getFilter = AppController.getFilter.bind(this)
  getItemFromIndex = AppController.getItemFromIndex.bind(this)
  inputScratch = AppController.inputScratch.bind(this)
  loadConfigs = AppController.loadConfigs.bind(this)


  render() {
    if (this.state.masterData === null) return <div>Loading...</div>;
    return (
      <Explorer app={this} />
    );
  }



  componentDidMount() {
    this.loadMasterData();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    document.addEventListener("keydown", AppController.onKeyDown.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    document.removeEventListener("keydown", AppController.onKeyDown.bind(this));
  }

  updateWindowDimensions() {
    let state = this.state;
    state.state.ui.width = window.innerWidth;
    this.setState(state);
  }


}