import './style.css';

import React from 'react';

export default React.createClass({
  render() {
    var data = this.props.data;

    return (
      <div className="Contact">
        <div className="Container">
          <h3>Have a project in mind?</h3>
          <p><a href="#">Get in touch</a></p>
        </div>
      </div>
    )
  }
});
