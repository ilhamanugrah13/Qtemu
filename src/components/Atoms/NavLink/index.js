import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

class NavLink extends React.Component {
  render () {
    const { text, to } = this.props;
    return (
      <li><Link to={ to }>{text}</Link></li>
    );
  }
}

export default NavLink;
