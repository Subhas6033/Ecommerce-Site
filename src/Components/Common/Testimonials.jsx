import React from 'react'

const Testimonials = ({className = "", children, ...props}) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  )
}

export default Testimonials