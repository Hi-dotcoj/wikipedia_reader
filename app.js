$(document).ready(function(){
     $("#name").keypress(function(e) {
        
       if(e.which == 13) {
          // Acciones a realizar, por ej: enviar formulario.
            $(".article-container").empty();
          var searchTitle = $(this).val();
          var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTitle + "&limit=10&format=json&callback=?";

  
          
          $.ajax( {
    url: url,
    jsonp: "callback", 
    dataType: 'jsonp', 
    xhrFields: { withCredentials: true },
    success: function(response) { 
      var title = response[1];
      var body = response[2];
      var link = response[3];

      for(var i=1; i < title.length; i++){
          $(".article-container").append(
              "<a href="+link[i]+" target=_blank><div class=fields><h3>"+title[i]+" </h3><p>"+body[i]+"</p></div></a> "

          )
      }

     }
});

    $(this).val("");


       }
    });
});
