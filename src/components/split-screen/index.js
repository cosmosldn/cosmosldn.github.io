import styles from './split-screen.css';

import React from 'react';
import marked from 'marked';

export default React.createClass({
  render () {
    let data = this.props.data;
    let items = data.products.map(function(item, i) {
      let rawMarkup = marked(item.text.toString(), {sanitize: true});
      return (
        <div className={styles.splitScreenItem} key={i}>
          <h3>{item.title}</h3>
          <p><span dangerouslySetInnerHTML={{__html: rawMarkup}} /></p>
        </div>
      )
    });
    return (
      <div className={styles.splitScreenDark}>
        <div className={styles.container}>
          {items}
        </div>
      </div>
    )
  }
});
