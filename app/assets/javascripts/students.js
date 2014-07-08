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
  			$( "#students" ).append( '<div class="col-lg-2 col-sm-6 col-xs-12"><li class="studentli" id=' + '"' + data[i]["id"] + '"'  + '><figure><img src="/assets/' + data[i]["photo"] + '" class="thumbnail img-responsive"><figcaption><p>' + data[i]["name"] + '</p></figcaption></figure></li></div>' );  			
			}
			hovereffect();
			getinfo();
		});
   
   var getinfo = function(){ $('.studentli').click(function(){
   		var current = students[this.id]
   		alert(current.bio);
  	 });
 		}

   $(function() {
      skrollr.init({
        forceHeight: false,
        smoothScrolling: false
      });
   });

 var hovereffect =function(){ $('figcaption').css('top','600px');
  $('figure').hover(function(){
  $(this).find('figcaption').stop().animate({'top':'160px'}, 200, function(){});
	},function(){
  $(this).find('figcaption').stop().animate({'top':'200px'}, 200, function(){});
	});
}


});  