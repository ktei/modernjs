import React from 'react';
import BaseSlide from '../BaseSlide';

export default class Slide extends BaseSlide {
  renderContent() {
    return (
      <div>
        <h1>{`How was Sam able to kill a whitewalker while even a ranger couldn't?`}</h1>
      </div>
    );
  }
}
