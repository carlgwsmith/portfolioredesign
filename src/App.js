import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useState} from 'react';
import CustomNav from './Components/Nav/CustomNav';
import Sidebar from './Components/Nav/Sidebar';
import Home from './Pages/Home'
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact'
import './App.css';

function App() {

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
