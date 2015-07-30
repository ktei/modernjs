import React from 'react';
import BaseSlide from '../BaseSlide';

export default class Slide extends BaseSlide {
  renderContent() {
    return (
      <div>
        <h1>Make a Better World</h1>
        <h2>Improve your front-end programming experience</h2>
      </div>
    );
  }
}
