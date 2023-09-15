import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
  return (
    <>
      {props.isOpen && (
        <div className="preloader">
          <div className="preloader__container">
            <span className="preloader__round"/>
          </div>
        </div>
      )}
    </>
  )
};

export default Preloader
