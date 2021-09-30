import Header from "./components/Header";
import Home from './components/pages/HOMEPAGE/Home';
import Projects from './components/pages/Projects';
import Menu from "./components/Menu";
import {
 BrowserRouter as Router,
 Switch,
 Route
 } from "react-router-dom"; 
 import Contact from "./components/pages/Contact";
 import Background from "./components/Background";
 import { transitions, positions, Provider as AlertProvider } from 'react-alert'
 import AlertTemplate from 'react-alert-template-basic'
 // eslint-disable-next-line
 
 const options = {
   // you can also just use 'bottom center'
   position: positions.BOTTOM_CENTER,
   timeout: 5000,
   offset: '30px',
   // you can also just use 'scale'
   transition: transitions.FADE
 }

function App() {
  return (
    <div>  
          <AlertProvider template={AlertTemplate} {...options}>
    <Background className="bg"/>
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
    </AlertProvider>
    </div>

  );
}

export default App;
