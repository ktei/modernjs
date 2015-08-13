import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { DRAGON_GLASS } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: -4000 }} endValue={{ val: currentSlide == DRAGON_GLASS ? 100 : -4000 }}>
        {interpolated => (
          <div className="slide" style={{ left: `${interpolated.val}px`, zIndex: currentSlide == DRAGON_GLASS ? 1 : 0 }}>
            <h1 className="extra-large">Dragon Glass!!!</h1>
            <h1>Right tool is the KEY</h1>
          </div>
        )}
      </Spring>
    );
  }
}
