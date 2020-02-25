import React, { Component } from 'react';

import WindowControls from "../controllers/WindowControls.js";
import { Table, Badge } from 'evergreen-ui'
import Utils from '../controllers/Utils.js';

export default class UserStoryTable extends Component {

    render() {

        let stories =this.props.content;

        if(Utils.isEmpty(stories)) return null;

        return (<>
            <h2><img src={"./img/story.png"} alt="userstorytable"  /> User Stories</h2>
            <Table >
                <Table.Head>
                    <Table.TextHeaderCell flexBasis={150} flexShrink={0} flexGrow={0} align="right">
                        User Type
                     </Table.TextHeaderCell>
                    <Table.TextHeaderCell >
                        User Story
                     </Table.TextHeaderCell>
                </Table.Head>
                <Table.Body border="1px solid black">
                    {stories.map(story => (
                        <Table.Row key={story.id} isSelectable onSelect={WindowControls.openItemInBox.bind(this.props.app,"story",story.id)}  >
                            <Table.TextCell flexBasis={150} flexShrink={0} flexGrow={0} align="right"><Badge color={Utils.getLabelColor(story.data['User Type'])}>{story.data['User Type']}</Badge></Table.TextCell>
                            <Table.TextCell>{story.data['Story']}</Table.TextCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
                    <pre>{/*JSON.stringify(this.props.content, null, 2)*/}</pre>
        </>
        );
    }

}