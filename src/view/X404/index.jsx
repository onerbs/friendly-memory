import React from 'react'

import './index.css'

export default function X404(props) {
  return(
    <div id="X404">
      <div className="Sign"></div>
      <p className="Text">{
        props.text
          ? props.text
          : "Page not found"
      }</p>
    </div>
  )
}
