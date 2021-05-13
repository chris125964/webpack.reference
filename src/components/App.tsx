import './style.css';

import { Content } from '../logic/content';
import { MemGrid } from './MemGrid';
import React from 'react';

// import About from './About';

// import { Memory } from './Memory';
// import PropTypes from 'prop-types';

// import {
//   Link,
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom';

interface AppProps {}

const Home = () => <div>Home</div>;

const App = ({}: AppProps) => {
  console.log(`created new content`);
  const content = new Content(15);
  content.createTileContent();
  // content.showContent();

  return (
    <div>
      <MemGrid content={content} />
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
};

App.propTypes = {};

export default App;
