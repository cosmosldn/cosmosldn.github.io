import styles from './workflow.css';

import React, {Component} from 'react';

export default class Workflow extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className={styles.root}>
        <div className="container">
          <div className={styles.image}><span className={styles.circle} /><span className={styles.circle} /><span className={styles.circle} /><span className={styles.circle} /></div>
          <div className={styles.content}>
            <h2 className={styles.title}>{data.workflow.title}</h2>
            <p className={styles.text}>{data.workflow.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

Workflow.propTypes = {
  data: React.PropTypes.object
};
