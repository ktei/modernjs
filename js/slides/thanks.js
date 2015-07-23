import React from 'react';
import BaseSlide from './base';

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1 className="extra-large">THANKS</h1>
        <h1>Now pay the tuition fee : P</h1>
      </div>
    );
  }
}
