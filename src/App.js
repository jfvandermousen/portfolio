import Header from "./components/Header";
// import Contact from "./components/Contact";
import Home from './components/Home';
import Projects from './components/Projects';
import Menu from "./components/Menu";
import {
 BrowserRouter as Router,
 Switch,
 Route
 } from "react-router-dom"; 
 import Contact from "./components/Contact";
 import Background from "./components/Background";








function App() {
  return (
    <div>
    <Background />
    <div className="container mx-auto px-8 pt-8">
      <Router>
      <Header />
      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route exact path= "/menu">
          <Menu />
        </Route>
        <Route exact path="/projects">
          <Projects  />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      </Router>
    </div>
    </div>

  );
}

export default App;
