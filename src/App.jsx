import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation-component';
import SignIn from './routes/sign-in/sign-in-component';

import Home from './routes/home/home-component';

import Shop from './routes/shop/shop-component';
import Checkout from './routes/checkout/checkout-component';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='check-out' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
