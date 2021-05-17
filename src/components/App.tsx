import './style.css';

import { Content } from '../logic/content';
import { MemGrid } from './MemGrid';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/sample/reducer';

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
  // const newGame = useSelector((state: RootState) => state.newGame);
  const [nrGame, setNrGame] = useState<number>(0);
  let content;

  const createContent = () => {
    let content = new Content(15);
    content.createTileContent();
    return content;
  };

  content = createContent();

  const onNewGame = () => {
    setNrGame(nrGame + 1);
  };

  // onNewGame();
  // content.showContent();

  return (
    <div>
      <MemGrid content={content} onNewGame={onNewGame} />
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
