import React from 'react'

const SectionDivider = ({icon}) => {
  return (
    
  <div className="flex justify-center items-center my-16">
    <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-orange-300 to-transparent relative">
      <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 text-xl">{icon}</span>
    </div>
  </div>

  )
}

export default SectionDivider