import React from 'react'

function Container({children}) {
  return (
    <div className='w-[1000px] mx-auto'>{children}</div>
  )
}

export default Container;