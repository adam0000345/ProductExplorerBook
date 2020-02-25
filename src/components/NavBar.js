
import React, { Component } from 'react';
import { Button, Pane, Heading, TabNavigation, Combobox, IconButton, Tab, SelectMenu, Tooltip, Position } from 'evergreen-ui'
import NavControls from "../controllers/NavControls.js";

export default class NavBar extends Component {

    render() {
        return (
            <>
                <Pane display="flex" padding={16} background={"#FFF"} >
                    <Pane flex={1} alignItems="center" display="flex">
                        <Heading className="TitleHead" fontWeight={700} fontSize="2em" color="#825eeb" >
                            <img className="Logo" alt="" src={'./img/logo.png'} />
                            BirdHouse<br/>
                            <span>SendBird Product Explorer</span>
                    </Heading>
                        <TabNavigation className="ProductTabs" color="Purple">
                            {NavControls.loadProducts().map((product, index) => (
                                <Tab key={product.label} is="button" id={"Tab_" + product.label} isSelected={product.ready} >
                                    {product.label}
                                </Tab>
                            ))}
                        </TabNavigation>
                    </Pane>
                    <Pane >
                        <Button iconAfter="search" onClick={this.props.app.setUIState.bind(this.props.app,"search", { isOpen: true })}>Search</Button>
                    </Pane>
                </Pane>
                <Pane padding={16} className="SecondRow">

                    <table className="NavTable"><tbody>
                        <tr className="labels">
                            <td></td>
                            <td>User Type</td>
                            <td>Industry Vertical</td>
                            <td>Filter</td>
                            <td>Criteria</td>
                            <td className="last">View cards as:</td>
                        </tr>
                        <tr>
                            <td>
                                <Tooltip content="Cook Book" position={Position.RIGHT}>
                                    <IconButton
                                        float="left"
                                        marginRight="1em"
                                        onClick={NavControls.onClickCookbook.bind(this.props.app)}
                                        icon="git-repo" iconSize={18} />
                                </Tooltip>
                            </td>
                            <td>
                                <Combobox
                                    float="left"
                                    marginRight="1em"
                                    width={160}
                                    selectedItem={NavControls.currentUserType(this.props.app)}
                                    items={NavControls.loadUserTypes(this.props.app)}
                                    onChange={NavControls.setUserType.bind(this.props.app)}
                                />
                            </td>
                            <td>
                                <Combobox
                                    float="left"
                                    marginRight="1em"
                                    width={160}
                                    selectedItem={{ label: NavControls.currentVertical(this.props.app).label }}
                                    items={NavControls.loadVerticals(this.props.app)}
                                    onChange={NavControls.setVertical.bind(this.props.app)}
                                    itemToString={item => item ? item.label : ''}
                                />
                            </td>
                            <td>
                                <Combobox
                                    float="left"
                                    marginRight="1em"
                                    width={175}
                                    selectedItem={{ label: NavControls.currentFilter(this.props.app).label }}
                                    items={NavControls.loadFilters()}
                                    onChange={NavControls.setFilter.bind(this.props.app)}
                                    itemToString={item => item ? item.label : ''}
                                />

                            </td>
                            <td className="criteria">
                                <SelectMenu
                                    marginRight="1em"
                                    float="left"
                                    isMultiSelect
                                    hasFilter={false}
                                    title={NavControls.multiSelect(this.props.app, "title")}
                                    options={NavControls.multiSelect(this.props.app, "options")}
                                    selected={NavControls.multiSelect(this.props.app, "selected")}
                                    onSelect={NavControls.multiSelect(this.props.app, "onSelect")}
                                    onDeselect={NavControls.multiSelect(this.props.app, "onDeselect")}

                                >
                                    <Button
                                        marginRight="1em">{NavControls.multiSelect(this.props.app, "label")}</Button>
                                </SelectMenu>
                            </td>
                            <td>

                    <Combobox
                                    float="right"
                                    width={150}
                                    marginRight="1em"
                                    selectedItem={NavControls.currentCardView(this.props.app)}
                                    items={NavControls.loadCardTypes()}
                                    onChange={NavControls.setCardView.bind(this.props.app)}
                                    itemToString={item => item ? item.label : ''}
                                />
                            </td>
                        </tr>
                    </tbody>
                    </table>




                </Pane>
            </>
        )
    }



}
