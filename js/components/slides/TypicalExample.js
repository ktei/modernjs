import React from 'react';
import BaseSlide from '../BaseSlide';

const CodeLeft = React.createClass({
  render() {
    return (
      <pre>
        <code>
{`
// in ldm.utils file
(function (ldm, $, undefined) {

  // revealing module pattern
  ldm.utils = new (function () {

    return {
      //Public Method
      isAcn: function () {
        // code omitted
      }
    };

  })();

})();

// to use isAcn in another file
ldm.utils.isAcn()
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
// in ldm.utils file
def isAcn:
  // code omitted

// to use isAcn in another file
from ldm import utils
utils.isAcn()
`
}
        </code>
      </pre>
    );
  }
});

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1>A Typical Example</h1>
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
