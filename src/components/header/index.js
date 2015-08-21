import styles from './header.css';

import React, {Component} from 'react';

import CosmosLogo from '../svg/cosmos.js';

export default class Header extends Component {
  render() {
    const data = this.props.data;
    return (
      <header className={styles.root}>
        <div className={styles.logo}>
          <CosmosLogo />
        </div>
        <h2 className={styles.title}>{data.slogan}</h2>
      </header>
    );
  }
}

Header.propTypes = {
  data: React.PropTypes.object
};
