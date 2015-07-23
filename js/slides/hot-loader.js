import React from 'react';
import BaseSlide from './base';

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1>React Hot Loader</h1>
        <h2>No more browser page refreshing!!!</h2>
      </div>
    );
  }
}
