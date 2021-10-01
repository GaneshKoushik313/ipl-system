
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Cricket  from './components/Cricket.js';
import Navbar  from './Navbar.js';

function App() {
  return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <Switch>
                    <Route path="/" exact component={ () => <Cricket></Cricket> } />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
