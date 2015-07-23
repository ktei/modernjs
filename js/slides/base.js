import React from 'react';
import classnames from 'classnames';

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classnames('slide', { hidden: this.props.hidden })}>
        {this.renderContent()}
      </div>
    );
  }
}

Slide.propTypes = { hidden: React.PropTypes.bool };
