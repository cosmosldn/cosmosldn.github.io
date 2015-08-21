import styles from './header.css';

import React from 'react';

import CosmosLogo from '../svg/cosmos.js';

export default React.createClass({
  render() {
    var data = this.props.data;


    return (
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <CosmosLogo />
        </div>
        <h2>{data.slogan}</h2>
      </header>
    )
  }
});
