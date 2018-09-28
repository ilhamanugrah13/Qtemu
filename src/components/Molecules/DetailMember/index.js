import React from 'react'
import PropTypes from 'prop-types'

class DetailMember extends React.Component {
  render () {
    const { children } = this.props;
    return (
      <div className="detailMember">
        { children }
      </div>
    );
  }
}

export default DetailMember;
