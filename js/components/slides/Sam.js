import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { SAM } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 0 }} endValue={{ val: currentSlide == SAM ? 1 : 0 }}>
        {interpolated => (
          <div className="slide" style={{ opacity: interpolated.val, zIndex: currentSlide == SAM ? 1 : 0 }}>
            <h1>{`How was Sam able to kill a whitewalker while even a ranger couldn't?`}</h1>
          </div>
        )}
      </Spring>
    );
  }
}
