import '../less/app.less';

import React from 'react';
import Intro from './slides/intro';
import TypicalExample from './slides/typical-example';
import $ from 'jquery';

const SLIDES = [
  Intro,
  TypicalExample
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    $(document).on('dblclick', this.onDocumentClick.bind(this));
  }

  onDocumentClick(e) {
    let nextIndex = 0;

    if (e.which === 1) {
      nextIndex = this.state.index + 1;
      if (nextIndex > SLIDES.length - 1) {
        nextIndex = 0;
      }
    } else {
      nextIndex = Math.max(0, this.state.index - 1);
    }
    this.setState({
      index: nextIndex
    });
  }

  render() {
    return (
      <div className="container">
        {SLIDES.map(function (s, index) {
          const Slide = s;

          return (
            <Slide hidden={this.state.index !== SLIDES.indexOf(Slide)} key={index} />
          );
        }.bind(this))}
      </div>
    );
  }
}
