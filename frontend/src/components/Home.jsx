import React from 'react'
import Header from './Header'
import Searching from './Searching'
import Footer from './Footer'
import CardSection from './CardSection'
import {useState} from 'react'
export default function Home() {
    const [cards, setCards] = useState([]);
  return (    
    <div className='flex flex-col justify-between h-screen'>
          <div className="p-2 bg-purple-100">
              <Header />
        <Searching setCards={setCards} />
      </div>  
      <CardSection cards={cards } setCards={setCards} />
        <Footer/>  
    </div>
  )
}
