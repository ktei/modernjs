import React from 'react';
import BaseSlide from './base';

const Code = React.createClass({
  render() {
    return (
      <pre>
        <code>
{`
(function (ldm, $, undefined) {

  // revealing module pattern
  ldm.utils = new (function () {

    // private properties
    //var privateProperty = true;

    //Private Methods
    function defineTrim() {
        if (!String.prototype.trim) {
            String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, '');
            };
        }
    }

    return {
      //Public Method
      initialise: function () {
        defineTrim();
    }
`
}
        </code>
      </pre>
    );
  }
});

export default class Slide extends BaseSlide {
  constructor(props) {
    super(props);
  }

  renderContent() {
    return (
      <div>
        <h1>Bootstrap starter template Slide 3</h1>
        <Code />
      </div>
    );
  }
}
