require('dotenv').config()
const connectDB = require('./config/db')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const router=require("./routes/cardRoutes")
app.use(express.json());
app.use(cors()); 

connectDB();
app.get('/',(req, res) => {
    res.end("hlo from server ✌️");
});
app.get('/ping', (req, res) => {
    res.end("Server is running");
})

app.use("/cards", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
