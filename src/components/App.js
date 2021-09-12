import React, { useState } from 'react';
import { Route } from 'react-router';

import './App.css';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="app">
      <Route>
        {/* <Header loggedIn={loggedIn}/>
        <Main/> */}
        <NotFoundPage/>
      </Route>
    </div>
    
  );
}

export default App;
