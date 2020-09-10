import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';

// components
import Nav from './components/shared/Nav';
import Home from './components/Home';
import Modal from './components/shared/Modal';
import CocktailsMenu from './components/cocktails/CocktailsMenu';
import AddCocktail from './components/cocktails/AddCocktail';
import Footer from './components/shared/Footer';

const App = () => {

  const [cocktailModal, setCocktailModal] = useState({ show: false, cocktail: {} });

  return (
    <Router>
      <Modal cocktailModal={cocktailModal} setCocktailModal={setCocktailModal} />
      <Nav />
      <div className="page-container">
        <Route>
          <Home />
        </Route>
        <Route>
          <CocktailsMenu cocktailModal={cocktailModal} setCocktailModal={setCocktailModal} />
        </Route>
        <Route path="/add-cocktail">
          <AddCocktail />
        </Route>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
