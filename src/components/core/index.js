import './style.css';

import React, {Component} from 'react';
import marked from 'marked';

export default class Core extends Component {
  render() {
    const data = this.props.data;
    const listItems = data.core.map(function m(item, i) {
      const rawMarkup = marked(item.text.toString(), {sanitize: true});
      return (
        <li key={i}>
          <h3>{item.title}</h3>
          <p><span dangerouslySetInnerHTML={{__html: rawMarkup}} /></p>
        </li>
        );
    });
    return (
      <div className="Core">
        <div className="Container">
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
    );
  }
}

Core.propTypes = {
  data: React.PropTypes.object
};
