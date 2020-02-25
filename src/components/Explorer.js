import React, { Component } from 'react';

import NavBar from './NavBar.js'
import Cards from './Cards.js'
import Window from './Window.js'
import Search from './Search.js'
import CookBook from './CookBook.js'
import SearchControls from '../controllers/SearchControls.js'

export default class Explorer extends Component {

  render() {
    return (
      <div className="App">

        <NavBar app={this.props.app} />
        <Cards app={this.props.app} />
        <Window app={this.props.app} />
        <Search app={this.props.app} results={SearchControls.searchResults(this.props.app)}/>
        <CookBook app={this.props.app} />


      </div>
    );
  }

}