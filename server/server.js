const express = require("express");
const cors = require("cors"); //cors lets backend & frontend talk 
const app = express();
const port = 8000;

app.use(express.json()); // allow reeading json objects
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000" //lets 3000 talk to 8000 
}))

require("./config/mongoose.config"); //importing db logic from mongoose config file

app.listen(port, () => console.log(`Listening on port ${port}`));