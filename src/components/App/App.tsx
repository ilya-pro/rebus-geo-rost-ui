import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import './App.css';
import menu from '../../assets/menu.svg';
import LoadIndicator from "../LoadIndicator";

const LazyLogin = (
    lazy(() => (
        import('../Login')
    ))
)

function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          Header Appa
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ul>
            <li><Link  to={'/'}>Home</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
          </ul>
          {/*<img className="App-logo" src={menu}/>*/}
        </header>
        <Suspense fallback={<LoadIndicator />}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login'>
              <LazyLogin/>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
