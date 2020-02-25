
import React, { Component } from 'react';
import { Pane, SideSheet,  Heading, Position } from 'evergreen-ui'
import NavControls from "../controllers/NavControls.js";
import Utils from "../controllers/Utils.js";
import config from '../config.json';

export default class CornerBox extends Component {

    render() {

        let recipes = config.cookbook.map((item,i) =>
            <Pane
                key={Utils.guid()}
                className="Recipe"
                marginTop={20}
                border
                padding="1em"
                overflow="auto"
                cursor="pointer"
                background="#EFEFEF"
                borderColor="#AAA"
                borderRadius="1em"
                onClick={this.props.app.loadConfigs.bind(this.props.app,item)}
            >
                <img alt="icon" src={"img/cookbook/"+item.icon+".png"} className="cookBookIcon" />
                <Heading size={600} color="#825eeb" fontWeight={800} fontFamily='Proxima' marginBottom={10}>{item.title}</Heading>
                    <Pane>{item.description}</Pane>
            </Pane>);


        return (
            <SideSheet
                position={Position.LEFT}
                isShown={NavControls.cookbookisOpen(this.props.app)}
                onCloseComplete={NavControls.cookbookisClosed.bind(this.props.app)}
            >
                <Pane padding="2em" >
                    <Heading size={900} color="#825eeb" fontWeight={800} fontFamily='Proxima' align="center">Cook Book</Heading>

                    {recipes}
                </Pane>
            </SideSheet>
        )
    }
}