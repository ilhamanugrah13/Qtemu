import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Header extends React.Component {
  render () {
    const { children } = this.props;
    return (
      <div className="header">
        { children }
      </div>
    );
  }
}

export default Header;
