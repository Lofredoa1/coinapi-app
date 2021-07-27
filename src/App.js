import './App.css';
import React from "react"
import {Route, Switch} from "react-router-dom"
import Currencies from './pages/currencies';
import Main from './pages/main';
import Price from './pages/price';
import Nav from './components/nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/currencies">
          <Currencies/>
        </Route>
        <Route 
          path="/price/:symbol"
          render={(routerProps)=> <Price {...routerProps}/>}
          />
          
          </Switch>
    </div>
  );
}

export default App;
