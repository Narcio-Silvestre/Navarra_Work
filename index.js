


const express = require('express');
const router = require('./routers/router');
const utils = require('./utils/util');

const app = express();
var port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",router);


//fisrt question
app.get('/1',(req,res)=>{
    res.status(200).json({message:'ok'});
})

//second question
app.post('/2',(req,res)=>{
    if(req.body.length == undefined)
        res.status(400).json({error:'there is no content in url'}) // if there isn't any object
    else
        res.status(200).json({total: req.body.length});
})

//third-line a question
app.post('/3a',(req,res)=>{
    if(req.body.length == undefined)
        res.status(400).json({error:'there is no content in url'})
    else{
        req.body.sort( utils.compare_quant).map(utils.prev_consum);
        res.status(200).json({message: req.body});
    }
});

//third-line 2 question
app.post("/3b",(req,res)=>{
    
});

//third-line 3 question
app.post('/3c',(req,res)=>{
    if(req.body.length == undefined)
        res.status(400).json({error:'there is no content in url'})
    else{
        let aux =  req.body.filter( utils.filt_port).map(utils.prev_consum);
        res.status(200).json({message: aux});
    }
});


app.listen(port, () => {
    console.log(`Server is running on url: http://localhost:${port}`);
});


