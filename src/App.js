import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route}
 from 'react-router-dom';



function App() {
  return (
    <Router>

    <div className='app'>
      <Switch>
      <Route exact path="/">
        <Header/>
        <Home/>
      </Route>
      <Route exact path="/checkout">
        <Header/>
   <h1>I'm CHECKOUT PAGEEEEEEEEE</h1>
      </Route>

      <Route exact path="/login">
        
  <Login/>
      </Route>
        

      </Switch>
   
    
    </div>
    </Router>

  );
}

export default App;
