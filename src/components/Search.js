
import React, { Component } from 'react';
import { Pane, Dialog, SearchInput, Badge } from 'evergreen-ui'
import SearchControls from "../controllers/SearchControls.js";
import Utils from '../controllers/Utils.js';

export default class Search extends Component {



    componentDidUpdate(){

        let search = this.props.app.getUIState("search");
        search.count = this.resultCount;
    }

    render() {


        let results = this.props.results;
         if(Array.isArray(results))
        {
            if(results.length===0) results = <NoResults  key={Utils.guid()}  app={this.props.app} />;
            else results = results.map((item,seq) => <SearchResult  key={Utils.guid()}  seq={seq} item={item} app={this.props.app} />);
        } 
        else if(results===1) results = <Loading  key={Utils.guid()} />
        else results = null;

        this.resultCount = (Array.isArray(results)) ? results.length : 0;

        return (
            <Pane>
                <Dialog
                    width={1080}
                    isShown={SearchControls.isOpen(this.props.app)}
                    title={<SearchInput
                        autoFocus
                        className="searchBar"
                        onChange={SearchControls.onChange.bind(this.props.app)}
                        fontWeight={800} placeholder="Search" width="100%" height={60} />}
                    onCloseComplete={SearchControls.isClosed.bind(this.props.app)}
                    hasFooter={false}
                    hasHeader={true}
                    preventBodyScrolling
                >
                    <Pane width="100%">{results}</Pane>
                </Dialog>
            </Pane>)
    }
}
class SearchResult extends Component {


    render() {
        let item = this.props.item;
        let seq = this.props.seq;
        let state = this.props.app.getUIState("search");
        let className = (state.index===seq) ? "active" : "";
        return (
            <Pane className={"searchResult "+className}  key={Utils.guid()} >
                <div className="CardHeading"><img alt="" src={'./img/' + item.type + '.png'} /><Badge color={item.color} isSolid marginRight="1em">{item.badge}</Badge>{this.highlight(item.label)}</div>
            </Pane>)
    }


    highlight(text) {
        if (Utils.isEmpty(text)) return null;
        let regex = new RegExp('(' + this.props.app.getUIState("search").query + ')', 'ig');
        return text.split(regex).map((part, i) => {
            if (i % 2) return <span key={Utils.guid()}  className="searchHighlight">{part}</span>
            return <span  key={Utils.guid()} >{part}</span>;
        });
    }
}

class Loading extends Component {

    render()
    {
        return <div align="center"><img src={"./img/search.gif"} alt="search"/><br/>Searching...</div>
    }

}
class NoResults extends Component {

    render()
    {
    return <div align="center">No results found for “{this.props.app.getUIState("search").query}”.</div>
    }

}