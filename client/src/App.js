import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Resources from "./pages/Resources";
import ImageGallery from "./components/imageGallery/ImageGallery"
import Food from "./components/foods/Food";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layouts/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import Parallax from "./components/Parallax";
import Maps from "./components/map/Heatmap";
import Consulate from "./components/Consulates/Consulate";
import Experience from "./components/experiences/Experience"
import Restaurant from "./components/restaurants/Restaurant"


//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";




import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Nav />
        <Route exact path='/' component={Parallax} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/landing' component={Landing} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/food' component={Food} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/restaurant' component={Restaurant} />
            <Route exact path='/gallery' component={ImageGallery} />
            <Route exact path='/maps' component={Maps} />
            <Route exact path='/consulates' component={Consulate} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </section>
      </Fragment>

    </Router>
  </Provider>
  
  );
};

export default App;

