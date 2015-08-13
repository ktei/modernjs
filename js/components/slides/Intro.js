import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { INTRO } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 100 }} endValue={{ val: currentSlide == INTRO ? 100 : -4000 }}>
        {interpolated => (
          <div className="slide" style={{ left: `${interpolated.val}px`, zIndex: currentSlide == INTRO ? 1 : 0 }}>
            <h1>Make a Better World</h1>
            <h2>Improve your front-end programming experience</h2>
          </div>
        )}
      </Spring>
    );
  }
}
