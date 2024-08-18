import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Searching({ setCards }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [searchTerm, setSearchTerm] = useState('');
  const [debounceTerm, setDebounceTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Update search term based on URL query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    setSearchTerm(query || '');
  }, [location.search]);

  // Debounce the search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Update URL and fetch data based on debounceTerm
  useEffect(() => {
    const fetchCards = async () => {
      try {
        if (debounceTerm === '') {
          // Fetch all cards when no search term is present
          const { data } = await axios.get(`${apiUrl}/cards`);
          setCards(data);
          navigate('/');
        } else {
          // Fetch filtered cards based on the search term
          const { data } = await axios.get(`${apiUrl}/cards/search?q=${debounceTerm}`);
          setCards(data);
          navigate(`/?q=${debounceTerm}`);
        }
      } catch (err) {
        toast.error(`Error: ${err.message}`);
      }
    };

    fetchCards();
  }, [debounceTerm]);

  return (
    <div className='text-center relative mx-auto p-9'>
      <h1 className="text-5xl font-bold mb-9">How Can I Help You?</h1>
      <div className="relative w-1/2 mx-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pl-4 pr-12 rounded-lg border border-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="absolute top-4 right-2">
            <FaArrowRight />
          </button>
        </form>
      </div>
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
