import React from 'react';
import BaseSlide from '../BaseSlide';

export default class Slide extends BaseSlide {
  renderContent() {
    return (
      <div>
        <h1>React Hot Loader</h1>
        <h2>No more browser page refreshing!!!</h2>
      </div>
    );
  }
}
