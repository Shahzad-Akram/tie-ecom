import { Route, Switch } from 'react-router-dom';

// Component
import { Navbar } from './components/navbar/Navbar';

// Pages
import { HomePage } from './pages/home/HomePage';
import { ShopPage } from './pages/shop/ShopPage';

import { Checkout } from './pages/checkout/Checkout';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    </>
  );
};

export default App;
