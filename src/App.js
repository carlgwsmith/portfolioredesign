import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CustomNav from './CustomNav';
import Home from './Pages/Home'
import Resume from './Pages/Resume';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <CustomNav/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/resume" exact component={Resume}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
