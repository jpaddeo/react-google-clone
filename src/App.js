import React from 'react';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/store">
            <h1>store</h1>
          </Route>
          <Route path="/gmail">
            <h1>gmail</h1>
          </Route>
          <Route path="/images">
            <h1>imágenes</h1>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
