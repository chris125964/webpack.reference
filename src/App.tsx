import React from 'react';
import PropTypes from 'prop-types';

interface AppProps {
  title: string;
}

const App = ({ title }: AppProps) => <div>{title}</div>;

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
