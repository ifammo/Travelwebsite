import React from 'react'

const SelectCard = (props) => {
  return (
      <div className='relative'>
                  <img className='w-full h-full object-cover rounded-md' src={props.bg} alt="" />
                  <div className=' bg-slate-gray/30 w-full h-full left-0 top-0 '>
                      <p className='text-white text-2xl absolute left-3 bottom-3'>{props.text}</p>
                  </div>
      </div>
  )
}

export default SelectCard