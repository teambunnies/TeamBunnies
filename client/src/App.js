import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Resources from "./pages/Resources";
import FoodExperiences from "./pages/FoodExperiences"
import PhotoGallery from "./pages/PhotoGallery";
import Registration from "./pages/Registration";


function App() {
  return (
    <Router>

      <div>

        <Route exact path="/" component={Main} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/foodexp" component={FoodExperiences} />
        <Route exact path="/gallery" component={PhotoGallery} />
        <Route exact path="/registration" component={Registration} />
      </div>
    </Router>
  );
}

export default App;
