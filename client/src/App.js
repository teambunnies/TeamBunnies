import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Resources from "./pages/Resources";
import PhotoGallery from "./pages/PhotoGallery";
import Food from "./pages/Food";


function App() {
  return (
    <Router>

      <div>

        <Route exact path="/" component={Main} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/gallery" component={PhotoGallery} />
    
      </div>
    </Router>
  );
}

export default App;
