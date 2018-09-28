import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Block extends React.Component {
  render () {
    const { children } = this.props;
    return(
      <div className="block">
        {children}
      </div>
    );
  }
}

export default Block;
