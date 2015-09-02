import styles from './header.css';

import React, {Component} from 'react';
import classie from 'classie';

import CosmosLogo from '../svg/cosmos.js';
import HeaderLogo from '../svg/header-logo.js';

export default class Header extends Component {
  render() {
    const data = this.props.data;

    return (
      <header className={styles.root}>
        <div className={styles.logo} onClick={this.debugger}>
          <CosmosLogo />
        </div>


        <div className="container">
          <div className={styles.copy}>
            <h1 className={styles.title}>{data.header.title}</h1>
            <h2 className={styles.slogan}>{data.header.slogan[0]}</h2>
          </div>

          <div className={styles.image}>
            <HeaderLogo />
          </div>
        </div>
      </header>
    );
  }

  debugger() {
    classie.toggleClass(document.body, 'dev');
  }
}

Header.propTypes = {
  data: React.PropTypes.object
};
