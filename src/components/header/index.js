import './style.css';

import React, {Component} from 'react';

import CosmosLogo from '../svg/cosmos.js';

export default class Header extends Component {
  render() {
    const data = this.props.data;
    return (
      <header className="Header">
        <div className="Header-logo">
          <CosmosLogo />
        </div>
        <h2>{data.slogan}</h2>
      </header>
    );
  }
}

Header.propTypes = {
  data: React.PropTypes.object
};
