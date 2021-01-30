import { Route, Switch } from "react-router-dom";

// Component
import { Navbar } from "./components/navbar/Navbar";

// Pages
import { HomePage } from "./pages/home/HomePage";
import { ShopPage } from "./pages/shop/ShopPage";
import { Checkout } from "./pages/checkout/Checkout";
import { YourOrder } from "./pages/order/YourOrder";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "react-use-cart";
import ProtectedRoutes from "./HOC/ProtectedRouter";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <ToastContainer />
          <Navbar />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/shop" component={ShopPage} />
              <ProtectedRoutes>
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/yourOrder" component={YourOrder} />
              </ProtectedRoutes>
            </Switch>
          </div>
        </CartProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
