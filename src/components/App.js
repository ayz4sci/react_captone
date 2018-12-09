import React, { Component } from 'react';
import CategoryCard from './category/CategoryCard';
import Header from './common/Header';
import Sidemenu from './common/Sidemenu';
import './App.css';

class App extends Component {
  state = {
    sideBarOpen: false
  }

  json = require('../components/utils/git-cheat-sheet.json');


  render() {
    return (
      <div id="outer-container">
        <Sidemenu />
        <div className="container" id="page-wrap">
          <Header />
          <div className="card-columns">
            { this.json.map( (item, key) => 
              <CategoryCard category={item}  key={key}/>
            )}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
