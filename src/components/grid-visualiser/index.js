import styles from './grid-visualiser.css';

import React, {Component} from 'react';


export default class GridVisualiser extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className="container">
          <div className={styles.small}>
            <span className={styles.sm1}></span>
            <span className={styles.sm1}></span>
            <span className={styles.sm1}></span>
            <span className={styles.sm1}></span>
            <span className={styles.sm1}></span>
            <span className={styles.sm1}></span>
          </div>

          <div className={styles.medium}>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
            <span className={styles.md1}></span>
          </div>
        </div>
      </div>
    );
  }
}

