import React from 'react'

import '../css/Info.css'

const Info = (props) => {
  console.log(props)
  return (
    <aside className={props.modalClass}>
      <img 
        src='./cancel.svg' 
        alt='close-icon'
        onClick={() => {
          props.untoggleModal()
        }} 
      />
      <h1>About Colorado Headcount</h1>
      <p>This app allows you to compare test scores between the school districts throughout Colorado. To compare two districts, simply click their cards to select them.</p>
    </aside>
  )
}

export default Info;