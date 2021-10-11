import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { usersMoc } from './redux/moc/moc';

//components
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/LoginPage/LoginPage';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
//import Products from './components/Products/Products';
//import OrdersList from './components/OrdersList/OrdersList';
import Messages from './components/Messages/Messages';

const App: React.FC = () => {

  const updateSellerDescription = () => {
    console.log('ok');

  }

  const Products = lazy(() => import('./components/Products/Products'));
  const OrdersList = lazy(() => import('./components/OrdersList/OrdersList'));

  return (
    <BrowserRouter>
      <section className="App main_wrapper">
        <SideBar />
        <Suspense fallback={<span>Loading ...</span>}>
          <Route path='/' exact component={Dashboard} />
          <Route path='/login' render={() => <LoginPage />} />
          <Route path='/profile' render={() => <Profile description='test descr' updateSellerDescription={updateSellerDescription} />} />
          <Route path='/products' render={() => <Products />} />
          <Route path='/orders' render={() => <OrdersList />} />
          <Route path='/messages' render={() => <Messages newMsgText='' users={usersMoc} />} />
        </Suspense>
      </section>
    </BrowserRouter>
  );
}

export default App;
