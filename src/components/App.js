import React, { useState } from 'react';
import { Route } from 'react-router';

import './App.css';
import Header from './Header/Header';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="app">
      <Route>
        <Header loggedIn={loggedIn}/>
      </Route>
    </div>
    
  );
}

export default App;
