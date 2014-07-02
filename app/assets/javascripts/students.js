$(window).load(function() 
{
   // executes when complete page is fully loaded, including all frames, objects and images


   $.get( "/students.json", function( data ) {
   		alert(data[0]["name"]);
  		$( "#students" ).append( '<li>' + data[0]["name"] + '</li>' );  			
		});






});  