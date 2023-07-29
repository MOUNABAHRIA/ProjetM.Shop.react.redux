import React from 'react'
import  ReactDOM  from 'react-dom'
import loderImg from '../../images/images.jpg'
const loader = () => {
  return  ReactDOM.createPortal(
    <div>
        <img src={loderImg} alt='loading'/>
    </div>,
    document.getElementById('loader')
  )

}

export default loader