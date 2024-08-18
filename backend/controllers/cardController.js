
const asyncHandler = require("express-async-handler");
const Card=require("../models/cardModel")
const addCard = asyncHandler(async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        res.status(400);
        throw new Error('Title and description are required.');
    }
    try { 
        const existingCard = await Card.findOne({
           title: { $regex: title, $options: 'i' }
        });
        if (existingCard) {
        res.status(409).json({ message: 'A card with this title already exists.' });
            return;
        }        
        const newCard = await Card.create({
            title: title,
            description: description
        });
        res.status(201).json(newCard);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
});


const allCards= asyncHandler(async (req, res) => {
    try { 
        const Cards = await Card.find();
        res.send(Cards);
    } catch (error) {
    res.status(400);
    throw new Error(error.message);
    }
});

const getCardByTitle = asyncHandler(async (req, res) => {
    const { title } = req.params;
    console.log("vvkrbdr", title);
    try { 
        const card = await Card.findOne({
           title: { $regex: title, $options: 'i' } , 
        });
        if (!card) {
            res.status(404).json({ message: 'Card not found' });
            return;
        }
        res.json(card);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
});

const searching = asyncHandler(async (req, res) => {
    try {
        const searchTerm = req.query.q || '';  
        let results;

        console.log("Search term:", searchTerm);

       
        const toFind = searchTerm ? {
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } }
            ]
        } : {};

      
        results = await Card.find(toFind);
   
        res.status(200).json(results);
    } catch (err) {
        
        console.error('Error during search:', err);

        
        res.status(400).json({ message: err.message });
    }
});

module.exports = {addCard,allCards,getCardByTitle,searching};

