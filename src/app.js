import './app.css';

import React from 'react';
import Root from './components/root';

if (typeof document !== 'undefined') {
  const initialProps = JSON.parse(document.getElementById('initial-props').innerHTML);
  React.renderToString(React.createElement(Root, initialProps), document);
}

module.exports = function render(locals, callback) {
  const html = React.renderToStaticMarkup(React.createElement(Root, locals));
  callback(null, '<!DOCTYPE html>' + html);
};
