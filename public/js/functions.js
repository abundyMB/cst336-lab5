/* global $ */
$(document).ready(function() {
   
   $(".favortiteIcon").on("click", function() {
      
      if($(this).attr("src") == "img/favorite.png") 
          $(this).attr("src", "img/favorite_on.png");
      else
        $(this).attr("src", "img/favorite.png");
        
        
   }); 
});