import styles from './contact.css';

import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.container}>
          <h3>Have a project in mind?</h3>
          <p><a href="#">Get in touch</a></p>
        </div>
      </div>
    );
  }
}
