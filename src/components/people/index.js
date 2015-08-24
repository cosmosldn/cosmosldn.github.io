import styles from './people.css';

import React, {Component} from 'react';
import SplitScreen from '../split-screen';

export default class People extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className={styles.root}>
        <SplitScreen data={data.people} theme="light" />
      </div>
    );
  }
}

People.propTypes = {
  data: React.PropTypes.object,
  people: React.PropTypes.array
};
