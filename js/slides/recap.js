import React from 'react';
import BaseSlide from './base';

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1>Basically... (as Billy usually says)</h1>
        <ul className="large">
          <li>Webpack + Babel: Writing JS of next generation</li>
          <li>Choose an excellent framework (React, Vue, Angular, Ember...)</li>
          <li>Use React hot loader if you use React</li>
          <li>Lint your JS</li>
          <li>Write LESS or SASS, not CSS (Lint them too)</li>
        </ul>
      </div>
    );
  }
}
