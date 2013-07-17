

$(document).ready(function(){

  $('.show').click(function(e){

    console.log( $(this).attr('href') );

    $.getJSON($(this).attr('href'), function(data) {

      $('#details').html("<p>Title is " + data.title + "</p>"
        + "<p>Body is " + data.body + "</p>");

    }).fail(function(){ $('#details').html("there was a problem"); });

    e.preventDefault();
  });

  $('#new_post').submit(function(e){

    $.post($(this).attr('action'), $(this).serialize(), function(responseData){

      alert("successfully posted " + responseData.title);

      // add it to the table (this is incomplete but you get the gist)
      $('#posts').append("<tr><td>" + responseData.title  + "</td></tr>");

    }, "json");

    $(this).trigger("reset");

    e.preventDefault();
  });

});


