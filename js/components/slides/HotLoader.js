import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { HOT_LOADER } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 0 }} endValue={{ val: currentSlide == HOT_LOADER ? 1 : 0 }}>
        {interpolated => (
          <div className="slide" style={{ opacity: interpolated.val }}>
            <h1>React Hot Loader</h1>
            <h2>No more browser page refreshing!!!</h2>
          </div>
        )}
      </Spring>
    );
  }
}
