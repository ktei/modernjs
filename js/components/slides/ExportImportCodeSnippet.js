import React from 'react';
import BaseSlide from '../BaseSlide';

const CodeLeft = React.createClass({
  render() {
    return (
      <pre>
        <code>
{`
// in ldm.utils file
export default {
  isAcn() {
    // code omitted
  }
};
`
}
        </code>
      </pre>
    );
  }
});

const CodeRight = React.createClass({
  render() {
    return (
      <pre>
        <code>
{`
// to use isAcn in another file
import ldm from ldm.utils;
utils.isAcn()
`
}
        </code>
      </pre>
    );
  }
});

export default class Slide extends BaseSlide {
  renderContent() {
    return (
      <div>
        <h1>Export / Import</h1>
        <div className="row">
          <div className="col-xs-6">
            <CodeLeft />
          </div>
          <div className="col-xs-6">
            <CodeRight />
          </div>
        </div>
      </div>
    );
  }
}
