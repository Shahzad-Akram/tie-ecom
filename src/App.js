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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ContactUs } from "./pages/contact/ContactUs";
import { Footer } from "./components/footer/Footer";
import { PrivacyPolicy } from "./pages/privacy/PrivacyPolicy";
import { Terms } from "./pages/privacy/Terms&Conditions";

const stripePromise = loadStripe("pk_test_kXHzy7mkRHnSIevN5jOZyriw00QEAFjbnf");

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <ToastContainer />
          <Navbar />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/contact" component={ContactUs} />

            <ProtectedRoutes>
              <Elements stripe={stripePromise}>
                <Route exact path="/checkout" component={Checkout} />
              </Elements>
              <Route exact path="/yourOrder" component={YourOrder} />
            </ProtectedRoutes>
          </Switch>

          <Footer />
        </CartProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
