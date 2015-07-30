import React from 'react';
import BaseSlide from '../BaseSlide';

export default class Slide extends BaseSlide {
  renderContent() {
    return (
      <div>
        <h1 className="extra-large">But... Talk is CHEAP</h1>
        <h1>Show Me The Code</h1>
      </div>
    );
  }
}
