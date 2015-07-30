import React from 'react';
import BaseSlide from '../BaseSlide';

export default class Slide extends BaseSlide {
  renderContent() {
    return (
      <div>
        <h1 className="extra-large">Lint Your JS</h1>
        <h2>
          Reduce silly mistakes
        </h2>
      </div>
    );
  }
}
