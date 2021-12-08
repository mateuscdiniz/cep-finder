import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import FindByCep from './components/FindByCep/FindByCep';
import FindByAddress from './components/FindByAddress/FindByAddress';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/findbycep" exact={true} element={<FindByCep />}></Route>
          <Route
            path="/findbyaddress"
            exact={true}
            element={<FindByAddress />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
