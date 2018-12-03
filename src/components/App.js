import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CategoryCard from './category/CategoryCard';
import Header from './common/Header';
import './App.css';

class App extends Component {
  render() {
    let json = require('../components/utils/git-cheat-sheet.json');

    return (
      <MuiThemeProvider>
        <div className="container">
          <Header />
          <div className="card-columns">
            { json.map( (item, key) => 
              <CategoryCard category={item}  key={key}/>
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
