import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { RECAP } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 0 }} endValue={{ val: currentSlide == RECAP ? 1 : 0 }}>
        {interpolated => (
          <div className="slide" style={{ opacity: interpolated.val, zIndex: currentSlide == RECAP ? 1 : 0 }}>
            <h1>Basically... (as Billy usually says)</h1>
            <ul className="large">
              <li>Webpack + Babel: Writing JS of next generation</li>
              <li>Choose an excellent framework (React, Vue, Angular, Ember...)</li>
              <li>Use React hot loader if you use React</li>
              <li>Lint your JS</li>
              <li>Write LESS or SASS, not CSS (Lint them too)</li>
            </ul>
          </div>
        )}
      </Spring>
    );
  }
}
