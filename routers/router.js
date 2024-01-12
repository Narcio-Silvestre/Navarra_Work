const router = require('express').Router();

var data = require('../data/datafile');

router.get("/4",(req,res)=>{
    if(data.url_data.length == undefined)
        res.status(400).json( {error:'there is no content in url'});
    else
        res.status(200).json( {data: data.url_data});
});





module.exports = router;