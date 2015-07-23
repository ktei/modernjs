import '../less/app.less';

import React from 'react';
import Intro from './slides/intro';
import TypicalExample from './slides/typical-example';
import ExportImportCodeSnippet from './slides/export-import-code-snippet';
import TalkIsCheap from './slides/talk-is-cheap';
import How from './slides/how';
import WebpackBabel from './slides/webpack-babel';
import Framework from './slides/framework';
import HotLoader from './slides/hot-loader';
import Eslint from './slides/eslint';
import Css from './slides/css';
import Recap from './slides/recap';
import Thanks from './slides/thanks';
import $ from 'jquery';

const SLIDES = [
  { slide: Intro },
  { slide: TypicalExample },
  { slide: TalkIsCheap },
  { slide: ExportImportCodeSnippet },
  { slide: How },
  { slide: WebpackBabel },
  { slide: Framework },
  { slide: HotLoader },
  { slide: Eslint },
  { slide: Css },
  { slide: Recap },
  { slide: Thanks }
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    $(document).on('click', this.onDocumentClick.bind(this));
  }

  onDocumentClick(e) {
    let nextIndex = 0;

    if (e.which === 1) {
      nextIndex = this.state.index + 1;
      if (nextIndex > SLIDES.length - 1) {
        nextIndex = 0;
      }
    } else {
      nextIndex = this.state.index - 1;
      if (nextIndex < 0) {
        nextIndex = SLIDES.length - 1;
      }
    }
    this.setState({
      index: nextIndex
    });
  }

  render() {
    return (
      <div className="container">
        {SLIDES.map(function (s, index) {
          const Slide = s.slide;

          return (
            <Slide hidden={this.state.index !== SLIDES.indexOf(s)} key={index} />
          );
        }.bind(this))}
      </div>
    );
  }
}
