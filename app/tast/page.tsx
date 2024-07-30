import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Breadcrumb from './Task/Breadcrumb';
import tust from '../albumPage/page';
import test from '../test/page';


const App = () => {
  return (
    <Router>
      <div>
        <Breadcrumb />
          <Route path="/"  />
          <Route path="/test" />
          <Route path="/contact" />
      </div>
    </Router>
  );
};

export default App;
