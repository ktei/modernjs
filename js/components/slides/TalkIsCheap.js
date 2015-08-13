import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { TALK_IS_CHEAP } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 0 }} endValue={{ val: currentSlide == TALK_IS_CHEAP ? 1 : 0 }}>
        {interpolated => (
          <div className="slide" style={{ opacity: interpolated.val }}>
            <h1 className="extra-large">But... Talk is CHEAP</h1>
            <h1>Show Me The Code</h1>
          </div>
        )}
      </Spring>
    );
  }
}
