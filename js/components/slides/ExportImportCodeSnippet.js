import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { EXPORT_IMPORT_CODE_SNIPPET } from '../../constants/Slides';

const CodeLeft = React.createClass({
  render() {
    return (
      <pre>
        <code>
{`
// in ldm.utils file
export function isAcn(number) {
  // code omitted
  // code omitted
  // code omitted
  // code omitted
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
import isAcn from ldm.utils;
// invoke it as normal function:
let thisIsAcn = isAcn('1234567');
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
      <Spring defaultValue={{ val: 0 }} endValue={{ val: currentSlide == EXPORT_IMPORT_CODE_SNIPPET ? 1 : 0 }}>
        {interpolated => (
          <div className="slide" style={{ opacity: interpolated.val }}>
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
        )}
      </Spring>
    );
  }
}
