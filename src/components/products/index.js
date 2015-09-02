import styles from './products.css';

import React, {Component} from 'react';
import SplitScreen from '../split-screen';

export default class Products extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className={styles.root}>
        <SplitScreen data={data.products} />
      </div>
    );
  }
}

Products.propTypes = {
  data: React.PropTypes.object,
  products: React.PropTypes.array
};
