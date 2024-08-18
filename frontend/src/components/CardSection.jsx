import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";

function CardSection({ cards, setCards }) {
  const [loading, setLoading] = useState(true); 

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchAllCards = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/cards`);
      setCards(data);
      setLoading(false); // Stop loading after data is fetched
    } catch (error) {
      console.error('API call failed:', error);
      toast.error('Failed to fetch data. Please try again later.');
      setLoading(false); // Stop loading even if there's an error
    }
  };

  useEffect(() => {
    fetchAllCards();
  }, []);

  return (
    <div className={`container mx-auto py-4 w-3/4 relative ${loading ? 'flex justify-center items-center' : 'grid grid-cols-1 md:grid-cols-2 gap-8'}`}>
      {loading ? ( 
        <ClipLoader loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
      ) : (
        cards && cards.map((card) => (
          <Card key={card._id} title={card.title} description={card.description} />
        ))
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
  );
}

export default CardSection;


