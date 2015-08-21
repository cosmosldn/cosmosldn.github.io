import './style.css';

import React from 'react';

import CosmosLogo from '../svg/cosmos.js';

export default React.createClass({
  render() {
    var data = this.props.data;

    console.log('data header -> ');
    return (
      <header className="Header">
        <div className="Header-logo">
          <CosmosLogo />
        </div>
        <h2>{data.slogan}</h2>
      </header>
    )
  }
});
