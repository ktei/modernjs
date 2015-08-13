import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import { Spring } from 'react-motion';
import { WEBPACK_BABEL } from '../../constants/Slides';

@connect(state => ({
  currentSlide: state.presentation.currentSlide
}))
export default class Slide extends Component {
  render() {
    const { currentSlide } = this.props;

    return (
      <Spring defaultValue={{ val: 0 }} endValue={{ val: currentSlide == WEBPACK_BABEL ? 1 : 0 }}>
        {interpolated => (
          <div className="slide" style={{
              transform: `scale(${interpolated.val}, ${interpolated.val})`,
              zIndex: currentSlide == WEBPACK_BABEL ? 1 : 0 
          }}>
            <h1>Webpack + Babel</h1>
            <h2>
              Start writing ES6 JS from NOW, or even ES7!
              <br />
              <a href="https://babeljs.io">{'https://babeljs.io'}</a>
              <br />
              <a href="https://babeljs.io">{'http://webpack.github.io/'}</a>
            </h2>
          </div>
        )}
      </Spring>
    );
  }
}
