import React from 'react';
import Nav from './components/Nav'
import Calculator from './components/Calculator'
import Guide from './components/Guide'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Calculator}/>
          <Route path='/guide' component={Guide}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
