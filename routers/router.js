//Author: Nárcio Silvestre
//Email: narciosilvestre16@gmail.com
//Contact: +351920262110
//Description: Test exercises from Company Navarra

const router = require('express').Router();

var data = require('../data/datafile');

//question 4
router.get("/4",(req,res)=>{
    if(data.url_data.length == undefined) // if there isn't any object 
        res.status(400).json( {error:'there is no content in url'});
    else
        res.status(200).json( {data: data.url_data});
});





module.exports = router;