import './style.css';

import React from 'react';
import marked from 'marked';

export default React.createClass({
  render () {
    let data = this.props.data;
    let items = data.products.map(function(item) {
      let rawMarkup = marked(item.text.toString(), {sanitize: true});
      return (
        <div className="SplitScreen-item">
          <h3>{item.title}</h3>
          <p><span dangerouslySetInnerHTML={{__html: rawMarkup}} /></p>
        </div>
      )
    });

    return (
      <div className="SplitScreen SplitScreen--dark">
        <div className="Container">
          {items}
        </div>
      </div>
    )
  }
});
