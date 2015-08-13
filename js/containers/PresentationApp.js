import React, { Component } from 'react';
/*eslint-disable no-unused-vars*/
import { connect } from 'redux/react';
/*eslint-disable no-unused-vars*/
import $ from 'jquery';
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

import { nextSlide, prevSlide } from '../actions/PresentationActions';

@connect(state => ({
  presentation: state.presentation
}))
export default class PresentationApp extends Component {
  componentDidMount() {
    this.documentClickHandler = this.handleDocumentClick.bind(this);
    $(document).on('click', this.documentClickHandler);
  }

  handleDocumentClick(e) {
    const { dispatch } = this.props;

    if (e.which === 1) {
      dispatch(nextSlide());
    } else {
      dispatch(prevSlide());
    }
  }

  componentWillUnmount() {
    $(document).off('click', this.documentClickHandler);
  }

  render() {
    return (
      <div className="container">
        {this.renderSlides()}
      </div>
    );
  }

  renderSlides() {
    return (
      <div>
        <Intro />
        <Sam />
        <DragonGlass />
        <TypicalExample />
        <TalkIsCheap />
        <ExportImportCodeSnippet />
        <How />
        <WebpackBabel />
        <Framework />
        <HotLoader />
        <Eslint />
        <Css />
        <Recap />
        <Thanks />
      </div>
    );
  }
}
