import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Resources from "./pages/Resources";
<<<<<<< HEAD
import PhotoGallery from "./pages/PhotoGallery";
import Food from "./pages/Food";
=======
import FoodExperiences from "./pages/FoodExperiences"
import Registration from "./pages/Registration";
import Photos from "./pages/Photos";
import ImageGallery from "./components/ImageGallery"

>>>>>>> 448fc8ccfdd0c2a320f0839a6b4a8e90ec348d78


function App() {
  return (
    <Router>

      <div>

        <Route exact path="/" component={Main} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/resources" component={Resources} />
<<<<<<< HEAD
        <Route exact path="/food" component={Food} />
        <Route exact path="/gallery" component={PhotoGallery} />
    
=======
        <Route exact path="/foodexp" component={FoodExperiences} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/images" component={ImageGallery} />
>>>>>>> 448fc8ccfdd0c2a320f0839a6b4a8e90ec348d78
      </div>
    </Router>
  );
}

export default App;
