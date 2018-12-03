import React, { Component } from 'react';
import CategoryCard from './category/CategoryCard';
import './App.css'

class App extends Component {
  render() {
    let json = require('../components/utils/git-cheat-sheet.json');

    return (
      <div className="container">
        <h2 className="row justify-content-md-center m-4">Git Sheetsheet</h2>
        <div className="card-columns">
          { json.map( (item, key) => 
            <CategoryCard category={item}  key={key}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
