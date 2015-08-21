import styles from './split-screen.css';

import React, {Component} from 'react';
import marked from 'marked';

export default class SplitScreen extends Component {
  render() {
    const data = this.props.data;
    const items = data.products.map(function m(item, i) {
      const rawMarkup = marked(item.text.toString(), {sanitize: true});
      return (
        <div className={styles.splitScreenItem} key={i}>
          <h3>{item.title}</h3>
          <p><span dangerouslySetInnerHTML={{__html: rawMarkup}} /></p>
        </div>
      );
    });
    return (
      <div className={styles.splitScreenDark}>
        <div className={styles.container}>
          {items}
        </div>
      </div>
    );
  }
}

SplitScreen.propTypes = {
  data: React.PropTypes.object
};
