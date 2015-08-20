import './style.css';

import React from 'react';

export default React.createClass({
  render () {
    var data = this.props.data;

    var items = data.products.map(function(item) {
      return (
        <div className="SplitScreen-item">
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
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
