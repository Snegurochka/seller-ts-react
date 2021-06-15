import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import OrdersList from './components/OrdersList/OrdersList';

function App() {

const updateSellerDescription = () => {
  console.log('ok');
  
}

  return (
    <BrowserRouter>
      <section className="App main_wrapper">
      <SideBar />

      <Route path='/profile' render={() => <Profile description = 'test descr' updateSellerDescription = { updateSellerDescription } />} />
      <Route path='/orders' render={() => <OrdersList/>} />
      </section>
    </BrowserRouter>
  );
}

export default App;
