import About from "./components/About";
import Header from "./components/Header";
import Works from "./components/Works";
// import {
 // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
// } from "react-router-dom"; 



function App() {
  return (
    <Router>
    <div className="container mx-auto px-8 pt-8">
      <Header/>
      <About />
      < Works className="mt-8" /> 
    </div>
  </Router >
  );
}

export default App;
