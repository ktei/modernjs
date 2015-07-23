import React from 'react';
import BaseSlide from './base';

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1 className="extra-large">But... Talk is CHEAP</h1>
        <h1>Show Me The Code</h1>
      </div>
    );
  }
}
