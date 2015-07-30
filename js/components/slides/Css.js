import React from 'react';
import BaseSlide from '../BaseSlide';

export default class Slide extends BaseSlide {
  renderContent() {
    return (
      <div>
        <h1>LESS, SASS</h1>
        <h2>Because writing CSS is way too slow</h2>
      </div>
    );
  }
}
