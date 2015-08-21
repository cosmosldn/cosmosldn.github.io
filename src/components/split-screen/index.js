import './style.css';

import React, {Component} from 'react';
import marked from 'marked';

export default class SplitScreen extends Component {
  render() {
    const data = this.props.data;
    const items = data.products.map(function m(item, i) {
      const rawMarkup = marked(item.text.toString(), {sanitize: true});
      return (
        <div className="SplitScreen-item" key={i}>
          <h3>{item.title}</h3>
          <p><span dangerouslySetInnerHTML={{__html: rawMarkup}} /></p>
        </div>
      );
    });
    return (
      <div className="SplitScreen SplitScreen--dark">
        <div className="Container">
          {items}
        </div>
      </div>
    );
  }
}

SplitScreen.propTypes = {
  data: React.PropTypes.object
};