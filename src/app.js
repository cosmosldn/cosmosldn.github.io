import './styles/styles.css';

import React from 'react';
import Root from './components/root';


if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
  React.renderToString(React.createElement(Root, initialProps), document)
}

module.exports = function render(locals, callback) {
  var html = React.renderToStaticMarkup(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
}
