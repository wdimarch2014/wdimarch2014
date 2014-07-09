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
  			$( "#students" ).append( '<div class="col-lg-2 col-sm-2 col-xs-12"><li class="studentli" id=' + '"' + data[i]["id"] + '"'  + '><figure><img src="/assets/' + data[i]["photo"] + '" class="thumbnail img-responsive"><figcaption><p>' + data[i]["name"] + '</p></figcaption></figure></li></div>' );  			
			}
			hovereffect();
			getinfo();
		});
   
   var getinfo = function(){ $('.studentli').click(function(){
   		var current = students[this.id]
   		modal.open({content: "<h3>" + current.name + "</h3><p>" + current.bio + "</p>" + 
   		"<p><a href='" + current.linkedin + "'>LinkedIn</a></p>" + "<p><a href='" + current.github + "'>GitHub</a></p><p>" + current.project3 + "</p><p><a href='" + current.website + "''>Personal Website</a></p>"  });
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


			var modal = (function(){
				var 
				method = {},
				$overlay,
				$modal,
				$content,
				$close;

				// Center the modal in the viewport
				method.center = function () {
					var top, left;

					top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
					left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

					$modal.css({
						top:top + $(window).scrollTop(), 
						left:left + $(window).scrollLeft()
					});
				};

				// Open the modal
				method.open = function (settings) {
					$content.empty().append(settings.content);

					$modal.css({
						width: settings.width || 'auto', 
						height: settings.height || 'auto'
					});

					method.center();
					$(window).bind('resize.modal', method.center);
					$modal.show();
					$overlay.show();
				};

				// Close the modal
				method.close = function () {
					$modal.hide();
					$overlay.hide();
					$content.empty();
					$(window).unbind('resize.modal');
				};

				// Generate the HTML and add it to the document
				$overlay = $('<div id="overlay"></div>');
				$modal = $('<div id="modal"></div>');
				$content = $('<div id="content"></div>');
				$close = $('<a id="close" href="#">close</a>');

				$modal.hide();
				$overlay.hide();
				$modal.append($content, $close);

				$(document).ready(function(){
					$('body').append($overlay, $modal);						
				});

				$close.click(function(e){
					e.preventDefault();
					method.close();
				});

				return method;
			}());
});  