import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./features/pages/Home";
import Products from "./features/Products";
import Services from "./features/pages/Services";
import SignIn from "./features/pages/SignIn";
import SignUp from "./features/pages/SignUp";
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          {/* <Route path='/' exact component={Home}/> */}
          <Route path="/home" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />

          {/* exact = sau path mà có exact thì đíu thêm đường dẫn con được */}
          <Route component={PageNotFound}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
