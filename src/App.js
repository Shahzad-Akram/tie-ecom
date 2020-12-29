import { Route, Switch } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { HomePage } from './pages/home/HomePage';
import { ShopPage } from './pages/home/ShopPage';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
