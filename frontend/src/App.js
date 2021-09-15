import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Restaurant from './components/Restaurant'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path={`/${this.prop.restaurant.name}`} component={Restaurant}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;