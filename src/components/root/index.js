import React from 'react';

import Header from '../header';
import Core from '../core';
import SplitScreen from '../split-screen';
import Contact from '../contact';

export default React.createClass({
  render () {
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <Header data={this.props} />
          <Core data={this.props} />
          <SplitScreen data={this.props} />
          <Contact data={this.props} />

          {/*<script src="bundle.js"></script>*/}
        </body>
      </html>
    )
  }
});
