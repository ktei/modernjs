import React from 'react';
import BaseSlide from './base';

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

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
