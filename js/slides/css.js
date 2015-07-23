import React from 'react';
import BaseSlide from './base';

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1>LESS, SASS</h1>
        <h2>Because writing CSS is way too slow</h2>
      </div>
    );
  }
}
