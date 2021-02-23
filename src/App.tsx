import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

interface AppProps {
  title: string;
}

const Home = () => <div>Home</div>;

const About = () => <div>About</div>;

const App = ({ title }: AppProps) => (
  <div>
    {title}
    <p />
    <Router>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
