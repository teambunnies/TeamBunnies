import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Resources from "./pages/Resources";
import FoodExperiences from "./pages/FoodExperiences"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Main} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/foodexp" component={FoodExperiences} />
      
      </div>
    </Router>
  );
}

export default App;
