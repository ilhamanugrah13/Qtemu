import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Heading extends React.Component {
  render () {
    const { text, children } = this.props;
    return(
      <div className="headingSection">
        <h1>{text}</h1>
        { children }
      </div>
    );
  }
}

export default Heading;
