
import React, { Component } from 'react';
import {  Pane, Combobox } from 'evergreen-ui'
import Card from './Card.js'
import CardControls from '../controllers/CardControls'
//import NavControls from '../controllers/NavControls'
import Utils from '../controllers/Utils';

export default class Cards extends Component {


    render() {
        let cards = CardControls.loadCards(this.props.app);
        let heading = CardControls.loadCardsHeading(this.props.app, cards)

        let groups = CardControls.loadCardGroups(this.props.app,cards);

        let panelWidth = this.props.app.getUIState("width")-0;
        let cardMinWidth = 300;
        let columnCount = (panelWidth/(cardMinWidth));
        let columnCountInt = parseInt(columnCount);
        let ratio = 1+((columnCount-columnCountInt)/columnCount);
        let cardWidth =parseInt(cardMinWidth*ratio)-25;

        let groupCount = groups.length;
        let Single = (groupCount===1) ? " Single" : " Multi";

        let columns = groups.map((groupfield,i,a)=>(
            <Pane className={"Column"+Single} width={(100/a.length)+"%"} key={Utils.guid()} >
                {(a.length<=1) ? null : <Pane className="Heading">{groupfield} </Pane>}
                <Pane background="#825eeb" className={"Cards ColCount"+columnCountInt}
                    paddingRight="2em"
                    cursor="pointer"
                    >
                    {cards.map(item => (<Card width={cardWidth}  debug={ratio} key={Utils.guid()} group={groupfield} cardData={item} app={this.props.app} />))}
                </Pane>
            </Pane>
        ));


        return (
            <>
                <Pane padding=".5em" background={"#212242"} color="#FFF" className="ThirdRow" borderTop="1px solid black">
                    
                    <h4><span className="left">{heading.heading}</span>
                        <table className="CardTable">
                            <tbody>
                                <tr className="toprow"><td>Label</td><td>Grouping</td></tr>
                                <tr><td><Combobox
                                    float="right"
                                    width={150}
                                    height={20}
                                    marginRight="1em"
                                    selectedItem={CardControls.currentCardLabel(this.props.app)}
                                    items={CardControls.loadCardLabels(this.props.app)}
                                    onChange={CardControls.labelCards.bind(this.props.app)}
                                    itemToString={item => item ? item.label : ''}
                                /></td><td><Combobox
                                    float="right"
                                    width={150}
                                        height={20}
                                    marginRight="1em"
                                    selectedItem={CardControls.currentCardGrouping(this.props.app)}
                                    items={CardControls.loadCardGroupings(this.props.app)}
                                    onChange={CardControls.groupCards.bind(this.props.app)}
                                    itemToString={item => item ? item.label : ''}
                                /></td></tr>
                            </tbody>
                        </table></h4>

                    
                </Pane>

                {columns}</>)

    }


    

}