var PARSE_APP = "kxJqShB8Xz9XA0wBrY3JBTO8du4smGYg1YKNR5yg";
var PARSE_JS = "EVH5zI4cEluONvLPliWtUJXvkknC0pmRTL18FplO";
var json;

//$(document).ready(function() {
function myFunction() {
	
    //Parse.enableLocalDatastore(this);
    

	//$("#airport").on("touchend", function(e) {
		
		//e.preventDefault();
		 
	
		
		 Parse.initialize(PARSE_APP,PARSE_JS);
         var NoteObject = Parse.Object.extend("guest");
  		
        var query = new Parse.Query(NoteObject);
		
  		query.equalTo('airportphone','303-666-9999');
			//alert(query);
		 query.find({
			success:function(object) {
				//alert(object);
			 var airportdesc=object[0].get("airportdesc");
			 var airportimg=object[0].get("airportimg");
			 var airportphone=object[0].get("airportphone");
			 var airportwebsite=object[0].get("airportwebsite");
		     var image=airportimg.url();
             var number="tel:"+airportphone;
			 //alert(number);
             $("#airportdesc").append(airportdesc);
             $("#airportimg").attr("src",image);
			 $("#airportphone").attr("href",number);
			 $("#airportwebsite").attr("href",airportwebsite);
			 $("#airportnum").append(airportphone);
			 
			}, 
			error:function(object,error) {
				console.dir(error);
				window.location="./home.html";
				alert("Sorry, I couldn't find it.");
			}

		//});
		
	//});

});
}