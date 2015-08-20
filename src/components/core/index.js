import './style.css';

import React from 'react';

export default React.createClass({
  render() {
    var data = this.props.data;

    var listItems = data.core.map(function(item) {
      return (
        <li>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </li>
      )
    });


    return (
      <div className="Core">
        <div className="Container">
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
    )
  }
});
