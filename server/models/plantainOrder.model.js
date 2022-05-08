const mongoose = require("mongoose"); //gotta make schema to shape info the api calls to

//this schema is for the loaded plantains order

const plantainOrderSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required: [true, "Please type your name!"],
        minlength: [3, "Names must be at least three characters"],
    },

    customerLastname: {
        type: String,
        required: [true, "Please type your last name!"],
        minlength: [3, "Last names must be at least three characters"],
    },

    orderMethod: {
        type: String,
        required: [true, "Sorry, you need to select an oder method!"],
        enum: [
            "Delivery",
            "Pickup",
        ],
    },

    customerAdress_1: {
        type: String,
        required: [false],
    },

    customerAdress_2: {
        type:String,
        required: [false],
    },

    customerCity: {
        type: String,
        required: [false],
    },

    sizeChoice: {
        type: String,
        required: [true, "Sorry, you need to select the size of your plantain base!"],
        enum: [
            "Small",
            "Medium",
            "Large",
        ],
    },

    quantityChoice: {
        type: Number,
        required: [true, "Please choose how many loaded plantains you want!"],
        min: 1,
        max: 100,
    },

    toppingsChoice: {
        type: [
            {
                text:{type: String, required: true},
                price:{type: Number, required: true},
            },
                ],
    },

}, {timestamps: true});

const plantainOrder = mongoose.model("plantainOrder", plantainOrderSchema);
module.exports = plantainOrder;

//need to export bc i will use this in controller and will be used as interface for API calls

//PS sorry if some comments seem reduntant, I like to remind myself of certain things that are easy for me to forget