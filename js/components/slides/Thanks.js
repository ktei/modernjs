import React from 'react';
import BaseSlide from '../BaseSlide';

export default class Slide extends BaseSlide {
  renderContent() {
    return (
      <div>
        <h1 className="extra-large">THANKS</h1>
        <h1>Now pay the tuition fee : P</h1>
      </div>
    );
  }
}
