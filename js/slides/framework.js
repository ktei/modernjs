import React from 'react';
import BaseSlide from './base';

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1 className="extra-large">Framework</h1>
        <h2>
          <a href="https://facebook.github.io/react/">React</a> (Virtual DOM)
        </h2>
        <h2>
          <a href="http://vuejs.org/">Vue</a> (MVVM)
        </h2>
      </div>
    );
  }
}
