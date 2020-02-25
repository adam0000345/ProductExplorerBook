
import React, { Component } from 'react';
import { Button, Pane, Text, Badge, Pill } from 'evergreen-ui'
import CardControls from '../controllers/CardControls'
import Utils from '../controllers/Utils';

export default class Cards extends Component {

    render() {
        let item = this.props.cardData;

        if (CardControls.cardNotInGroup(this.props.app, this.props.cardData, this.props.group)) return null;


        var max = 1 + Math.floor(Math.random() * 20);
        var bottom = [];
        for (var i = 1; i <= max; i++) {
            bottom.push(<div>ddd</div>);
        }

        return (<Pane
            elevation={3}
            width={this.props.width}
            background="#FFF"
            borderRadius={15}
            className="Card"
            onClick={CardControls.onClickCard.bind(this.props.app, this.props.cardData)}
        >
            {this.label(this.props.cardData)}
            <Text className="CardHeading"><img alt="" src={'./img/' + item.type + '.png'} />{this.heading(item)}</Text>

            {this.cardPreview(this.props.app, this.props.cardData.preview)}
        </Pane>)
    }

    heading(item) {
        let object = CardControls.buildHeading(item);
        if (Utils.isEmpty(object.highlight)) return object.heading;
        let frontandback = object.heading.split(object.highlight);
        return <span className="cardHeadingNoHighlight">{frontandback[0]}<span className="cardHeadingHighlight">{object.highlight}</span>{frontandback[1]}</span>

    }


    label(card) {
        if (!CardControls.hasLabel(this.props.app)) return null
        let label = CardControls.getCardLabel(this.props.app, card);
        if (Utils.isEmpty(label)) return null;
        return <Badge color={label.color}>{label.label}</Badge>
    }

    cardPreview(app, previewData) {
        if (Utils.isEmpty(previewData)) return null;
        if (Utils.isEmpty(previewData.type)) return null;
        if (previewData.type === "tree") return <div className="cardPreview"><Tree app={app} data={previewData} /></div>
        if (previewData.type === "status") return <div className="cardPreview"><Status app={app} data={previewData} /></div>
        return

    }


}


class Tree extends Component {

    constructor() {
        super();
        this.state = { open: false }
    }

    render() {
        let data = this.props.data;
        if (!this.state.open) return <Button onClick={this.openTree.bind(this)}><Pill display="inline-flex" margin={8}>{data.buttonNumber}</Pill> {data.buttonLabel}</Button>
        return <div className="tree">{data.tree.map(branch => this.branch(branch))}</div>
    }

    openTree(e) {
        e.stopPropagation();
        this.setState({ open: true });
    }
    branch(branch) {
        return <div key={Utils.guid()} className="branch"><img alt="" src={'./img/' + branch.type + '.png'} />{branch.label}</div>
    }

}

class Status extends Component {

    render() {
        let data = this.props.data;
        if(data===null) return null;
        if(data.done===true) return this.pastStatus(data);
        return this.futureStatus(data);
    }

    pastStatus(data)
    {
        return <div className="status">
            <Badge marginRight={10} isSolid>{data.label}</Badge><br/>
            <Badge >v{data.version}</Badge><span>&nbsp;</span><Badge marginRight={10}>{data.date}</Badge>
        </div>
    }

    futureStatus(data)
    {
        return <div className="status">
            <span>Working on it:</span> <Badge isSolid color={data.timeframeColor}>{data.timeframe}</Badge>
        </div>
    }

}