import React from 'react'

const AboutDetails = (props) => {
  return (
    <div>
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{props.heading}</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              {props.content}
              </p>
    </div>
  )
}

export default AboutDetails