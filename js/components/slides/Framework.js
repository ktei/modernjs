import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { FRAMEWORK } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 90 }} endValue={{ val: currentSlide == FRAMEWORK ? 0 : 90 }}>
        {interpolated => (
          <div className="slide" style={{
              transform: `skewY(${interpolated.val}deg)`,
              zIndex: currentSlide == FRAMEWORK ? 1 : 0 
          }}>
            <h1 className="extra-large">Framework</h1>
            <h2>
              <a href="https://facebook.github.io/react/">React</a> (Virtual DOM)
            </h2>
            <h2>
              <a href="http://vuejs.org/">Vue</a> (MVVM)
            </h2>
          </div>
        )}
      </Spring>
    );
  }
}
