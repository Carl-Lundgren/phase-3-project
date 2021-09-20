import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'
import { NavLink } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavLink to="/">Home</NavLink>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/restaurantInformation" component={RestaurantDetails}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;