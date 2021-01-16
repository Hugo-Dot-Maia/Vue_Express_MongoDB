const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get post
router.get('/', (req, res) =>{
    res.send('Holá');
});

//Add post

//Delete post
async function loaPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://abc123:<hugo123>@cluster0.qifxa.mongodb.net/<dbname>?retryWrites=true&w=majority')
}

module.exports = router;