import styles from './contact.css';

import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className={styles.contact}>
        <div className={styles.container}>
          <h3>{data.contact.title}</h3>
          <p><a href="#">{data.contact.cta}</a></p>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  data: React.PropTypes.object
};
