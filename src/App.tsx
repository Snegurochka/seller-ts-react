import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import {usersMoc} from './redux/moc/moc';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import OrdersList from './components/OrdersList/OrdersList';
import Messages from './components/Messages/Messages';

function App() {

  const updateSellerDescription = () => {
    console.log('ok');

  }

  return (
    <BrowserRouter>
      <section className="App main_wrapper">
        <SideBar />

        <Route path='/profile' render={() => <Profile description='test descr' updateSellerDescription={updateSellerDescription} />} />
        <Route path='/orders' render={() => <OrdersList />} />
        <Route path='/messages' render={() => <Messages newMsgText='' users={usersMoc} />} />
      </section>
    </BrowserRouter>
  );
}

export default App;
