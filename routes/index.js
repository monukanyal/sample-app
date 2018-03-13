const express = require('express');
const router = express.Router();
const async=require('async');
const continents=require('../Datafiles/continents.json');
const countries=require('../Datafiles/countries.json');


router.get('/', (req, res)=>{
      res.render('index',{ page_title:'Home',continents:continents});
      //res.send({ page_title:'Home',continents:continents});
});

router.get('/:contenent',function(req,res){
 //res.send(req.params);
//var configs =new Array();
var configs =[];
var continent=req.params.contenent;
async.forEachOf(countries, function (value, key, callback) {
    //console.log('continents:'+continent);
    console.log((value.target).indexOf(continent));
    if(parseInt((value.target).indexOf(continent))!= -1)
    {
         configs[key]=value;
        //console.log('storing');
    }
    configs = configs.filter(function(e){return e }); 
    callback(null, configs);

}, function (err,data) {
    if (err){
      console.error(err);
    }
    else
    {
        console.log('ok'); 
         res.send({ page_title:req.params,countries:configs});
    }
    // configs is now a map of JSON data
});



});

router.get('/:contenent/:country',function(req,res){
 res.send(req.params);
});


module.exports = router;
