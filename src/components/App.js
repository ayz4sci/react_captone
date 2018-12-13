import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../actions/categoryActions';
import * as userActions from '../actions/userActions';
import SearchHeader from './common/SearchHeader';
import Mansonry from './home/MasonryContainer';
import Sidemenu from './common/Sidemenu';
import './App.css';

class App extends Component {
  state = {
    sideBarOpen: false, 
    searchTerm: ""
  }

  json = require('../components/utils/git-cheat-sheet.json');

  onSearchChange = (e) => {
    e.preventDefault();
    this.setState({searchTerm: e.target.value});
    this.props.actions.categoryActions.loadCategories(e.target.value);
  }

  render() {
    return (
      <div id="outer-container">
        <Sidemenu 
          userActions={this.props.actions.userActions} 
          user={this.props.user} />
        <div className="container" id="page-wrap">
          <SearchHeader 
            loading={this.props.loading} 
            onSearchChange={this.onSearchChange} />
          { this.state.searchTerm && !this.props.categories.length ? 
            <p><b>{ this.state.searchTerm}</b> not found!</p>
            :
            <Mansonry categories={this.props.categories} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.ajaxCallsInProgress > 0,
  categories: state.categories,
  user: state.user,
});

const mapDispatchToProps = (dispatch) =>({
  actions: {
    categoryActions: bindActionCreators( categoryActions, dispatch ),
    userActions: bindActionCreators( userActions, dispatch )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
