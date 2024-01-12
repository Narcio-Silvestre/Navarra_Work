const express = require('express');
const router = require('./routers/router');
const utils = require('./utils/util');

const app = express();
let port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",router);

app.get('/1',(req,res)=>{
    res.status(200).json({message:'ok'});
})

app.post('/2',(req,res)=>{
    if(req.body.length == undefined)
        res.status(400).json({error:'there is no content in url'})
    else
        res.status(200).json({total: req.body.length});
})


app.post('/3a',(req,res)=>{
    if(req.body.length == undefined)
        res.status(400).json({error:'there is no content in url'})
    else{
        req.body.sort( utils.compare_quant);
        req.body = utils.prev_consum(req.body);
        res.status(200).json({message: req.body});
    }
});

app.post("/3b",(req,res)=>{
    if(req.body.length == undefined)
        res.status(400).json({error:'there is no content in url'})
    else{
        req.body.sort( (a,b) =>
        {
            return b.quantidade - a.quantidade;
        });
        res.status(200).json({message: req.body});
    }
});

app.post('/3c',(req,res)=>{
    if(req.body.length == undefined)
        res.status(400).json({error:'there is no content in url'})
    else{
        let aux =  req.body.filter( utils.filt_port);

        aux = utils.prev_consum(aux);
        res.status(200).json({message: aux});
    }
});


app.listen(port, () => {
    console.log(`Server is running on url: http://localhost:${port}`);
});


