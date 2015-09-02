import styles from './principles.css';

import React, {Component} from 'react';
import marked from 'marked';

export default class Principles extends Component {
  render() {
    const data = this.props.data;
    const listItems = data.principles.map(function m(item, i) {
      const rawMarkup = marked(item.text.toString(), {sanitize: true});
      return (
        <li className={styles.item} key={i}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}><span dangerouslySetInnerHTML={{__html: rawMarkup}} /></p>
        </li>
        );
    });

    return (
      <div className={styles.root}>
        <div className="container">
          <ul className={styles.list}>
            {listItems}
          </ul>
        </div>
      </div>
    );
  }
}

Principles.propTypes = {
  data: React.PropTypes.object
};
