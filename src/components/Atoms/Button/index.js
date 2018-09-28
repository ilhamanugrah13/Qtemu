import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Button extends React.Component {
  getSize(x){
    if(typeof(x) === 'string'){
      return '';
    }
    else{
      return x.size;
    }
  }
  getText(x){
    if(typeof(x) === 'string'){
      return x;
    }
    else{
      return x.text;
    }
  }
  render () {
    const { btnProps } = this.props;
    const size = this.getSize(btnProps);
    const text = this.getText(btnProps);
    return (
      <button className={"button " + size}>{ text }</button>
    );
  }
}

Button.defaultProps = {
  size: ''
}

Button.propTypes ={
  btnProps: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
}

export default Button;
