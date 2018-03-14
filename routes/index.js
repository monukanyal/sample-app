const express = require('express');
const router = express.Router();
const async=require('async');
const datamanipualtor=require('./datamanipualtor');
const continents=require('../Datafiles/continents1.json');
const countries=require('../Datafiles/countries1.json');


router.get('/', (req, res)=>{
      var ncr=3;
      var cal=(continents.length/ncr);
      console.log(Math.ceil(cal));
      var tr=Math.ceil(cal);
      res.render('index',{ page_title:'Home', sub_title:'THE WORLD',continents:continents,totalrow:tr});
});

router.get('/:continent',function(req,res){
 //res.send(req.params);
var configs =[];
var sourceroutes={};
sourceroutes.orgurl=req.originalUrl;
sourceroutes.orgname='/'+req.params.continent;

    datamanipualtor.getdata(req,countries,callback);
      function callback(err, response)
      {
        if(!err)
        {
          res.render('countries',{ page_title:'Continent', sub_title:(req.params.continent).toUpperCase(),countries:response.countries,sourceroutes:sourceroutes});
        }
        else
        {
          console.log('error found');
        }
      }
});

router.get('/:continent/:country',function(req,res){
   //res.send(req.params.continent);
   //res.send(req.params.country);
   var configs=[];
   var country=req.params.country;
    var sourceroutes={};
    sourceroutes.orgurl=req.originalUrl;
    sourceroutes.orgname='/'+req.params.country;
    sourceroutes.prevurl='/'+req.params.continent;

    datamanipualtor.getdata(req,countries,callback);
      function callback(err, response)
      {
        if(!err)
        {
           res.render('country',{ page_title:'Country', sub_title:req.params.country,country:response.country, sourceroutes:sourceroutes});
        }
        else
        {
          console.log('error found');
        }
      }
});
module.exports = router;
