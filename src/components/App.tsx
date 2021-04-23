import './style.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import About from './About';
import { MemGrid } from './MemGrid';
import { Memory } from './Memory';
import PropTypes from 'prop-types';
import React from 'react';

interface AppProps {
}

const Home = () => <div>Home</div>;

const App = ({ }: AppProps) => (
  <div >
    <MemGrid />
    {/* <p />
    <Router>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/about">About</Link>
      </button>
      <button>
        <Link to="/memory">Memory</Link>
      </button>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/memory" component={Memory} />
    </Router> */}
  </div>
);

App.propTypes = {
};

export default App;
