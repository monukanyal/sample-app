/*
  #####  ### ##### #### ####   ###   ###  ###  ##### #####
  #     #    #     #    #   # #   # #    #   # #       #
  ###    ##  ###   ###  ####  #####  ##  #   # ###     #
  #        # #     #    #  #  #   #    # #   # #       #
  ##### ###  #     #### #   # #   # ###   ###  #       #
*/

/** Imports **/
var async = require("async");
module.exports = 
{
	getdata: function(req,countries,fCallBack)
	{	 if(req.params)
		{  
			if(req.params.country)
			{
				  var country=req.params.country;
				  	var configs=[];
				     async.forEachOf(countries, function (value, key, callback) {
				      	console.log((value.id).indexOf(country));
				      if(parseInt((value.id).indexOf(country))!= -1)
				      {
				            configs[key]=value;
				      
				      }
				      configs = configs.filter(function(e){return e }); 
				      callback(null);

				  }, function (err) {
				      if (err){
				        console.error(err);
				      }
				      else
				      {   
				         fCallBack(false,{ country:configs});
				      }
				  });
			}
			else
			{
				 var continent=req.params.continent;
					var configs=[];
				     async.forEachOf(countries, function (value, key, callback) {
							console.log((value.target).indexOf(continent));
							if(parseInt((value.target).indexOf(continent))!= -1)
							{
							configs[key]=value;
							}
							configs = configs.filter(function(e){return e }); 
							callback(null);

					  }, function (err) {
					      if (err){
					        console.error(err);
					      }
					      else
					      {   
					         fCallBack(false,{ countries:configs});
					      }
					  });
			}

		
		}
		else
		{		
			  fCallBack(true,null);
		}
	}
	
} //end module export