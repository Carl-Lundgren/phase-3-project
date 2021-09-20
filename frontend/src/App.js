import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from './components/HomePage'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={HomePage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;