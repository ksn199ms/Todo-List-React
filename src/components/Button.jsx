import React from 'react'
import propTypes from 'prop-types'

function Button(props) {
  return <button className={props.className} onClick={props.handleClick} >{props.text}</button>
  
}

Button.propTypes = {
    className: propTypes.string,
    text: propTypes.string,
    handleClick: propTypes.func
}
export default Button