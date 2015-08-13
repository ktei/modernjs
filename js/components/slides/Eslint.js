import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { ESLINT } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 0 }} endValue={{ val: currentSlide == ESLINT ? 1 : 0 }}>
        {interpolated => (
          <div className="slide" style={{ opacity: interpolated.val, zIndex: currentSlide == ESLINT ? 1 : 0 }}>
            <h1 className="extra-large">Lint Your JS</h1>
            <h2>
              Reduce silly mistakes
            </h2>
          </div>
        )}
      </Spring>
    );
  }
}
