import React from 'react'

export default function Header() {
  return (
     <header className="bg-black text-white p-4 flex justify-between items-center rounded-t-2xl px-7">
        <div className="flex items-center cursor-pointer" >
          <img
            src={require('../images/ass_L.jpg')}
            alt="Logo"
            className="h-6 w-6 mr-2"
          />
          <span className="px-2">Abstract | Help Center</span>
        </div>
        <button className="bg-gray-800 md:py-1 md:px-2 rounded-md border-2 px-1 py-1 border-white min-w-fit" >Submit a request</button>
      </header>
  )
}
