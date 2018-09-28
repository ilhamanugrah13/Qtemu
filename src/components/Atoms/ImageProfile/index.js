import React from 'react'
import PropTypes from 'prop-types'

class ImageProfile extends React.Component {
  render () {
    const { src, alt, imgStyle } = this.props;
    return(
      <div className="imageProfile">
        <img src={src} alt={alt}/>
      </div>
    );
  }
}

ImageProfile.defaultProps = {
  src: '',
  alt: ' '
}

export default ImageProfile;
