var PARSE_APP = "kxJqShB8Xz9XA0wBrY3JBTO8du4smGYg1YKNR5yg";
var PARSE_JS = "EVH5zI4cEluONvLPliWtUJXvkknC0pmRTL18FplO";
var json;
//$(document).ready(function() {
	
   // Parse.enableLocalDatastore(this);
 function myFunction() {

	//$("#atm").on("touchend", function(e) {
		
		//e.preventDefault();
		 
	
		 Parse.initialize(PARSE_APP,PARSE_JS);
         var NoteObject = Parse.Object.extend("guest");
  		
        var query = new Parse.Query(NoteObject);
  		query.equalTo('airportphone','303-666-9999');
			//alert(query);
		 query.find({
			success:function(object) {
			  

	
				var atmdesc=object[0].get("atmdesc");
				//json=atmdesc;
				 
				 $("#atmdesc").append(atmdesc);
				//window.location="./atm.html?mesg="+json;
			}, 
			error:function(object,error) {
				console.dir(error);
				//window.location="./index.html";
				alert("Sorry, I couldn't find it.");
			}

		//});
		
	//});
});
}