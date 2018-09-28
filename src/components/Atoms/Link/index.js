import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {
  render () {
    const { text, color } = this.props;
    return(
      <a href=""
        style={{
          'color': color,
          'textDecoration': 'none'
        }}
        >
        {text}
      </a>
    )
  }
}

export default Link;
