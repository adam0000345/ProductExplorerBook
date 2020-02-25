
import React, { Component } from 'react';
import { Pane, Dialog, Text, Heading } from 'evergreen-ui'
import WindowControls from "../controllers/WindowControls.js";
import Utils from '../controllers/Utils.js';
import SubthemeTree from "./SubthemeTree.js";
import UserStoryTable from "./UserStoryTable.js";
import DocList from "./DocList.js";

export default class Window extends Component {

  buildBlock(block)
  {
    if(Utils.isEmpty(block)) return <pre>{JSON.stringify}</pre>;

    if (block.type === "subthemes") return <SubthemeTree key={Utils.guid()} content={block} app={this.props.app} />
    if (block.type === "stories") return <UserStoryTable key={Utils.guid()} content={block.content} app={this.props.app}/>
    if (block.type === "docs") return <DocList key={Utils.guid()} content={block} app={this.props.app}/>
  
    return <pre key={Utils.guid()}>{JSON.stringify(block,null,2)}</pre>;
  }

  buildBlocks(blocks) {
    if(Utils.isEmpty(blocks)) return null;
    return <>{blocks.map(block=>this.buildBlock(block))}</>
  }

  titleLabel(label)
  {
    if(Utils.isEmpty(label)) return null;
  return <div className="titleLabel">{label}</div>
  }

  render() {
    let content = WindowControls.loadWindowContent(this.props.app);
    return (
      <Pane >
        <Dialog 
          width={1080}
          isShown={WindowControls.isOpen(this.props.app)}
          title={<Text className="WindowTitle">
            <img alt="" src={'./img/' + content.type + '.png'} />
            {this.titleLabel(content.titleLabel)}
            <Heading fontFamily="Proxima">{content.title}</Heading>
          </Text>}
          onCloseComplete={WindowControls.isClosed.bind(this.props.app)}
          hasFooter={false}
          hasHeader={true}
          preventBodyScrolling
        >
  <Pane width="100%" className="infoBox" >{this.buildBlocks(content.blocks)}<hr/><pre>{JSON.stringify(this.props.app.state.config,null,2)}</pre><hr/><pre>{JSON.stringify(content,null,2)}</pre></Pane>
        </Dialog>
      </Pane>)
  }
}
