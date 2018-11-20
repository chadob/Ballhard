import React from 'react';
import './home.css'
import { Home } from './home';
import { connect } from 'react-redux';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Home />
    );
  }
}

export default (HomeContainer)
