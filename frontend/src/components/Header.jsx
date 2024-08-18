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
          <span>Abstract | Help Center</span>
        </div>
        <button className="bg-gray-800 py-1 px-2 rounded-md border-2 border-white">Submit a request</button>
      </header>
  )
}
