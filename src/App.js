import { Route, Switch } from 'react-router-dom';

// Component
import { Navbar } from './components/navbar/Navbar';

// Pages
import { HomePage } from './pages/home/HomePage';
import { ShopPage } from './pages/shop/ShopPage';
import { Checkout } from './pages/checkout/Checkout';
import { YourOrder } from './pages/order/YourOrder';
import { ContactUs } from './pages/contact/ContactUs';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/yourOrder' component={YourOrder} />
          <Route exact path='/contact' component={ContactUs} />
        </Switch>
      </div>
    </>
  );
};

export default App;
