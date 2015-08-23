import styles from './deliverables.css';

import React, {Component} from 'react';

export default class Deliverables extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className={styles.root}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>{data.deliverables.title}</h2>
            <p className={styles.text}>{data.deliverables.text}</p>
          </div>
          <div className={styles.image}>
            <span className={styles.rectangle} />
            <span className={styles.rectangle} />
          </div>
        </div>
      </div>
    );
  }
}

Deliverables.propTypes = {
  data: React.PropTypes.object
};
