import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
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
        

      </Switch>
   
    
    </div>
    </Router>

  );
}

export default App;
