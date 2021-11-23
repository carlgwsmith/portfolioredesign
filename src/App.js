import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, {useState} from 'react';
import CustomNav from './Components/Nav/CustomNav';
import Sidebar from './Components/Nav/Sidebar';
import Home from './Pages/Home'
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact'
import ISCaseStudy from './Components/Projects/IncomeSolver/ISCaseStudy';
import FMCaseStudy from './Components/Projects/FOMOMachine/FMCaseStudy';
import CCCaseStudy from './Components/Projects/CryptoCompare/CCCaseStudy';
import RCCaseStudy from './Components/Projects/RetirementCalc/RCCaseStudy';
import LCaseStudy from './Components/Projects/Loanic/LoanicCaseStudy'
import 'react-image-lightbox/style.css';
import './App.css';
// import ReactGA from 'react-ga';
// import RouteChangeTracker from './RouteChangeTracker';

function App() {
  // ReactGA.initialize('UA-188840384-1');
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <CustomNav toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/projects/incomesolver" exact component={ISCaseStudy}/>
        <Route path="/projects/cryptocompare" exact component={CCCaseStudy}/>
        <Route path="/projects/retirementcalc" exact component={RCCaseStudy}/>
        <Route path="/projects/fomomachine" exact component={FMCaseStudy}/>
        <Route path="/projects/loanic" exact component={LCaseStudy}/>
        </Switch>
      </div>
      {/* <RouteChangeTracker/> */}
    </Router>
  );
}

export default App;
