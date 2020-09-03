import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import './SearchPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">

      {/* the following router includes switch and will always render the header and footer */}
     
     
     
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />

        {/* placing the homepage route at the bottom so that an invalid route can be redirected to the homepage */}
      
      </ Router>
    </div>





  );
}





export default App;
