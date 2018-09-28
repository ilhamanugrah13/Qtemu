import React from 'react';
import PropTypes from 'prop-types';

class NavbarWrap extends React.Component {
  render () {
    const { children } = this.props;
    return (
      <ul>
        { children }
      </ul>
    );
  }
}

export default NavbarWrap ;
