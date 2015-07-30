import React from 'react';
import BaseSlide from '../BaseSlide';

export default class Slide extends BaseSlide {
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
