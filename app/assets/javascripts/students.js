$(window).load(function() {

	var students = []

  	$.get( "/students.json", function( data ) {
   		for( var i = 0; i < data.length; i++ ){
   			students[data[i]["id"]] = {
   				name: data[i]["name"],
   				bio: data[i]["bio"],
					github: data[i]["github"],
					linkedin: data[i]["linkedin"],
					photo: data[i]["photo"],
					project1: data[i]["project1"],
					project2: data[i]["project2"],
					project3: data[i]["project3"],
					website: data[i]["website"],
   			}
  			$( "#students" ).append( '<li class="studentli" id=' + '"' + data[i]["id"] + '"'  + '>' + data[i]["name"] + '</li>' );  			
			}
			getinfo();
		});
   
   var getinfo = function(){ $('.studentli').click(function(){
   		var current = students[this.id]
   		alert(current.bio);
  	 });
 		}






});  