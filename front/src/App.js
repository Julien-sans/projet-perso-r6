import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import Cards from './components/Cards';
import CardsLPH from './components/CardsLPH';
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <NavBar />
            <Switch>
              <Route exact path="(/|/home)" render={() => <Cards />} />
              <Route exact path="/lph-stats" component={CardsLPH} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
