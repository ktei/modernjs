import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { CSS } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 0 }} endValue={{ val: currentSlide == CSS ? 1 : 0 }}>
        {interpolated => (
          <div className="slide" style={{ opacity: interpolated.val }}>
            <h1>LESS, SASS</h1>
            <h2>Because writing CSS is way too slow</h2>
          </div>
        )}
      </Spring>
    );
  }
}
