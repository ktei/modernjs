import { Record } from 'immutable';
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
import { NEXT_SLIDE, PREV_SLIDE } from '../constants/ActionTypes';

const SLIDES = [
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
];

class State extends Record({
  slideIndex: 0,
  currentSlide: SLIDES[0]
}) {

}

function nextSlide(state) {
  let nextIndex = state.slideIndex + 1;
  if (nextIndex > SLIDES.length - 1) {
    nextIndex = 0;
  }
  return state.set('slideIndex', nextIndex)
    .set('currentSlide', SLIDES[nextIndex]);
}

function prevSlide(state) {
  let nextIndex = state.slideIndex - 1;
  if (nextIndex < 0) {
    nextIndex = SLIDES.length - 1;
  }
  return state.set('slideIndex', nextIndex)
    .set('currentSlide', SLIDES[nextIndex]);
}

export default function (state = new State(), action) {
  const { type } = action;

  switch (type) {
    case NEXT_SLIDE:
      return nextSlide(state);

    case PREV_SLIDE:
      return prevSlide(state);

    default:
      return state;
  }
}
