import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CardSection({cards,setCards}) {

 const apiUrl = process.env.REACT_APP_API_URL;
  
  const fetchAllCards = async () => {
    try {
      
      const {data} = await axios.get(`${apiUrl}/cards`);
      setCards(data);
    
     } catch (error) {
      console.error('API call failed:', error);
      toast.error('Failed to fetch data. Please try again later.');
      }
  }   
  
  useEffect(() => {
    fetchAllCards();
  },[]);

  return (
    <>
       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-4 w-3/4">  
       
         {cards&&cards.map((card) =>
        <Card key={card._id} title={card.title} description={card.description} />
        )}
        
               <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
          </div>
      </>
  )
}

export default CardSection
