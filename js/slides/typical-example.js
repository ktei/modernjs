import React from 'react';
import BaseSlide from './base';

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1>Bootstrap starter template Slide 3</h1>
        <h2>Use this document as
          a way to quickly start any new project.</h2>
      </div>
    );
  }
}
