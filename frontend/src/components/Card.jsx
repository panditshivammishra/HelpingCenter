import React from 'react'

const Card = ({ title, description }) => {
    console.log(title,description)
  return (<a href="/">
   <div className="cursor-pointer flex border flex-col relative border-gray-400 rounded-xl">
          <div className="text-gray-700 pt-3 pl-3 pb-2 font-bold">{title}</div>
          <div className='border border-gray-300'></div>
          <div className="text-gray-500 pb-6 pt-1 px-5">{description}</div>
  </div></a>
  )
}

export default Card;
