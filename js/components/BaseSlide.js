import React from 'react';
import classnames from 'classnames';

export default class Slide extends React.Component {
  static propTypes = {
    hidden: React.PropTypes.bool.isRequired
  };

  render() {
    return (
      <div className={classnames('slide', { hidden: this.props.hidden })}>
        {this.renderContent()}
      </div>
    );
  }
}
