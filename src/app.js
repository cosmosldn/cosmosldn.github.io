import './styles/styles.css';

import React from 'react';
import Root from './components/root';


module.exports = function render(locals, callback) {
  var html = React.renderToStaticMarkup(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
}
