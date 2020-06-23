import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import FreshSadarines from './FreshSadarines';



function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact activeClassName="active-nav" to="/">
          Home
        </NavLink>
              <NavLink exact activeClassName="active-nav" to="/soda">
                Soda
        </NavLink>
              <NavLink exact activeClassName="active-nav" to="/chips">
                Chips
        </NavLink>
              <NavLink exact activeClassName="active-nav" to="/freshsadarines">
                Fresh Sadarines
        </NavLink>
      </nav>
        
      <Switch>
        <Route exact path='/' component = {VendingMachine} />
        <Route exact path='/soda' component={Soda} />
        <Route exact path='/chips' component={Chips} />
        <Route exact path='/freshsadarines' component={FreshSadarines} />

      </Switch>
    </div>
  );
}

export default App;
