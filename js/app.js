	$(function(){//fonction pricipale
		
			$('#info').load('intro.html').fadeOut(2).fadeIn(400);
			
			//appel du fichier par la méthode load
			$('#loading-file-a').on('click', ()=>{//event
          		$('#info').load('card-a.html').fadeOut(2).fadeIn('.wrap');//fichier à charger  
          		$('.active').removeClass('active');
          		
          		  $(this).addClass('active');

        		});
			

			//2ème appel 
			$('#loading-file-b').on('click', ()=>{//event
          		$('#info').load('card-b.html').fadeOut(2).fadeIn('.wrap');//fichier à charger
          		  $('.active').removeClass('active');
          		  	$(this).addClass('active');
          		  
        		});
			


			//3ème appel 
			$('#loading-file-base').on('click', ()=>{//event
          		$('#info').load('intro.html').fadeOut(2).fadeIn('.wrap');//fichier à charger
          		  $('.active').removeClass('active');
            		$(this).addClass('active');
            		
        		});
      //4ème appel
      $('#loading-file-c').on('click', ()=>{//event
              $('#info').load('card-c.html').fadeOut(2).fadeIn('.wrap');//fichier à charger
                $('.active').removeClass('active');
                $(this).addClass('active');
                
            });
		});