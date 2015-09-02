import styles from './products.css';

import React, {Component} from 'react';
import SplitScreen from '../split-screen';

export default class Products extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className={styles.root}>
        <div className={styles.image}>
          <div className={styles.prototype1}></div>
          <div className={styles.prototype2}></div>
          <div className={styles.prototype3}></div>
          <div className={styles.styleguide1}></div>
          <div className={styles.styleguide2}></div>
          <div className={styles.styleguide3}></div>
          <div className={styles.styleguide4}></div>
          <div className={styles.styleguide5}></div>
        </div>
        <SplitScreen data={data.products} />
      </div>
    );
  }
}

Products.propTypes = {
  data: React.PropTypes.object,
  products: React.PropTypes.array
};
