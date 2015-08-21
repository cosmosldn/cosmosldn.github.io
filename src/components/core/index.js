import styles from './core.css';

import React from 'react';
import marked from 'marked';

export default React.createClass({
  render() {
    let data = this.props.data;
    let listItems = data.core.map(function(item, i) {
      let rawMarkup = marked(item.text.toString(), {sanitize: true});
      return (
        <li key={i}>
          <h3>{item.title}</h3>
          <p><span dangerouslySetInnerHTML={{__html: rawMarkup}} /></p>
        </li>
      )
    });
    return (
      <div className={styles.core}>
        <div className={styles.container}>
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
    )
  }
});
