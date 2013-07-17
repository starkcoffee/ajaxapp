

$(document).ready(function(){

  $('.show').click(function(e){

    console.log( $(this).attr('href') );

    $.getJSON($(this).attr('href'), function(data) {

      $('#details').html("<p>Title is " + data.title + "</p>"
        + "<p>Body is " + data.body + "</p>");

    });

    e.preventDefault();

  });

});


