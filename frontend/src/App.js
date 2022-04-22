import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import ProductDetails from './Components/ProductDetails';
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
     

      <Route exact path="/login">
        
  <Login/>
      </Route>

      <Route exact path="/product/id">
      <ProductDetails/>
    </Route>
        

      </Switch>
   
    
    </div>
    </Router>

  );
}

export default App;
