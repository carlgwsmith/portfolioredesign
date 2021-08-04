import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CustomNav from './Components/Nav/CustomNav';
import Home from './Pages/Home'
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact'
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <CustomNav/>
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
