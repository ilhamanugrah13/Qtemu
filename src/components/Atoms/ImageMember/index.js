import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ImageMember extends React.Component {
  render () {
    const { src, alt } = this.props;
    return (
      <div className="imageMember">
        <img src={src} alt={alt}/>
      </div>
    );
  }
}

ImageMember.defaultProps = {
  src: '',
  alt: ' '
}

export default ImageMember;
