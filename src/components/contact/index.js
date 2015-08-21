import styles from './contact.css';

import React from 'react';

export default React.createClass({
  render() {
    var data = this.props.data;

    return (
      <div className={styles.contact}>
        <div className={styles.container}>
          <h3>Have a project in mind?</h3>
          <p><a href="#">Get in touch</a></p>
        </div>
      </div>
    )
  }
});
