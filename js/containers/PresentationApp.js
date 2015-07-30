import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import $ from 'jquery';
import {
  INTRO,
  SAM,
  DRAGON_GLASS,
  TYPICAL_EXAMPLE,
  TALK_IS_CHEAP,
  EXPORT_IMPORT_CODE_SNIPPET,
  HOW,
  WEBPACK_BABEL,
  FRAMEWORK,
  HOT_LOADER,
  ESLINT,
  CSS,
  RECAP,
  THANKS
} from '../constants/Slides';
import Intro from '../components/slides/Intro';
import Sam from '../components/slides/Sam';
import DragonGlass from '../components/slides/DragonGlass';
import TypicalExample from '../components/slides/TypicalExample';
import TalkIsCheap from '../components/slides/TalkIsCheap';
import ExportImportCodeSnippet from '../components/slides/ExportImportCodeSnippet';
import How from '../components/slides/How';
import WebpackBabel from '../components/slides/WebpackBabel';
import Framework from '../components/slides/Framework';
import HotLoader from '../components/slides/HotLoader';
import Eslint from '../components/slides/Eslint';
import Css from '../components/slides/Css';
import Recap from '../components/slides/Recap';
import Thanks from '../components/slides/Thanks';

import * as PresentationActions from '../actions/PresentationActions';

@connect(state => ({
  presentation: state.presentation
}))
export default class PresentationApp extends Component {
  static propTypes = {
    presentation: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.documentClickHandler = this.handleDocumentClick.bind(this);
    $(document).on('click', this.documentClickHandler);
  }

  handleDocumentClick(e) {
    const { dispatch } = this.props;

    if (e.which === 1) {
      dispatch(PresentationActions.nextSlide());
    } else {
      dispatch(PresentationActions.prevSlide());
    }
  }

  componentWillUnmount() {
    $(document).off('click', this.documentClickHandler);
  }

  render() {
    const { currentSlide } = this.props.presentation;

    return (
      <div className="container">
        {this.renderSlides(currentSlide)}
      </div>
    );
  }

  renderSlides(currentSlide) {
    return (
      <div>
        <Intro hidden={currentSlide != INTRO} />
        <Sam hidden={currentSlide != SAM} />
        <DragonGlass hidden={currentSlide != DRAGON_GLASS} />
        <TypicalExample hidden={currentSlide != TYPICAL_EXAMPLE} />
        <TalkIsCheap hidden={currentSlide != TALK_IS_CHEAP} />
        <ExportImportCodeSnippet hidden={currentSlide != EXPORT_IMPORT_CODE_SNIPPET} />
        <How hidden={currentSlide != HOW} />
        <WebpackBabel hidden={currentSlide != WEBPACK_BABEL} />
        <Framework hidden={currentSlide != FRAMEWORK} />
        <HotLoader hidden={currentSlide != HOT_LOADER} />
        <Eslint hidden={currentSlide != ESLINT} />
        <Css hidden={currentSlide != CSS} />
        <Recap hidden={currentSlide != RECAP} />
        <Thanks hidden={currentSlide != THANKS} />
      </div>
    );
  }
}
