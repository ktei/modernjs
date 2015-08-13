import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { TYPICAL_EXAMPLE } from '../../constants/Slides';

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
  // code omitted

// then, to use isAcn in another file
from ldm import utils
utils.isAcn()
`
}
        </code>
      </pre>
    );
  }
});

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 0 }} endValue={{ val: currentSlide == TYPICAL_EXAMPLE ? 1 : 0 }}>
        {interpolated => (
          <div className="slide" style={{ opacity: interpolated.val, zIndex: currentSlide == TYPICAL_EXAMPLE ? 1 : 0 }}>
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
        )}
      </Spring>
    );
  }
}
