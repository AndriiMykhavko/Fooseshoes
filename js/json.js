window.drop = function(obj){
    var i;
    for(i = 0; i<obj.length; i++) {
        $("#drop-dwn").append("<li><a href='#'>" + obj[i].search +"</a></li>" );
    }
};
var script = document.createElement('script');
script.src = 'js/out.json';
document.getElementsByTagName('head')[0].appendChild(script);

//--------------------Push-Email--------------------//

$(document).ready(function() {
 
$("button.email-button").click(function(){

  var email = jQuery("input#send").val();
  var dataString = '&email=' + email ; 

 
   jQuery.ajax({  
      type: "POST",  
      url: "email.php",  
      data: dataString,
      success:  function() {  
        $('#input-email')[0].reset();
       } 
    });  
    return false;
     });
});
