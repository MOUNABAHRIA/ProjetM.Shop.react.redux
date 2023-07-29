import React from 'react'
import '../footer/Footer.css'

const Footer = () => {
  const date=new Date();
  const years =date.getFullYear();
  return (
    <div  id="footerr" className="Footer">&copy;{years} All rights reserved</div>
  )
}

export default Footer