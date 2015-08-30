import React, {Component} from 'react';

import Header from '../header';
import Principles from '../principles';
import Deliverables from '../deliverables';
import SplitScreen from '../split-screen';
import People from '../people';
import Contact from '../contact';

export default class Root extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className="Root">
        <Header data={data} />
        <Principles data={data} />
        <Deliverables data={data} />
        <SplitScreen data={data.products} theme="dark" />
        <People data={data} />
        <Contact data={data} />
      </div>
    );
  }
}

Root.propTypes = {
  data: React.PropTypes.object,
  products: React.PropTypes.array
};

