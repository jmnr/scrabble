/// TWITTER API

/// widjet from twitter APi website
/*/ / twitter widjet js from twitter API dev website*/
    window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));

/// WORD NIK API

  function ajaxGetRequest (searchurl, callback){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState === 4) {
          callback(request.responseText);
        };
    };
    request.open("GET", searchurl, true);
    request.send();
  }
  function makeUrl (word) {
    return ('https://api.wordnik.com/v4/word.json/' + word +
    "/definitions?limit=1&includeRelated=false&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");
  }
  function displayResults (response) {
    var definition = JSON.parse(response)[0] !== undefined ? JSON.parse(response)[0].text : "No definition found!"
    document.getElementById("dictionary").innerHTML = '"' + definition + '"';
    console.log(definition);
    return definition;
  }


$(document).ready(function(){
  var boxes;

  $('#plus-button').click(function() {
    boxes = $("#inputBoxes > input").length;
    if(boxes < 15) {
      $("#inputBoxes").append(
        '<input maxlength="1" size="1" type="text" class="inputs" id="search' + (boxes + 1) + '">'
      )
    }
  });

  $('#minus-button').click(function() {
    boxes = $("#inputBoxes > input").length;
    if(boxes > 2) {
      $("#inputBoxes input:last-child").remove()
    }
  });

  $('#clear-button').click(function() {
    boxes = $("#inputBoxes > input").length;
    for(var i = 1; i <= boxes; i++) {
      $("#search" + i).val('');
    }
    $('#results').html('');
    $('#twitter-box').html('');
    $('#dictionary').html('');

  });

  $('body').on('click','.suggestions', function() {
    var word = $(this).html();
    ajaxGetRequest(makeUrl(word), displayResults);
    $.get('/twitter/' + word, function (tweetData) {
      $('#twitter-box').html(tweetData);
    });
  })


  $('body').on('keyup','.inputs', function() {

    if (this.value.length == this.maxLength) {
      var $next = $(this).next('.inputs');
      if ($next.length)
         $(this).next('.inputs').focus();
      else
         $(this).blur();
       };

    boxes = $("#inputBoxes > input").length;
    var arr = [];
    var live = false;
    for(var i = 1; i <= boxes; i++) {
      var x = document.getElementById('search' + i).value;
      if(x.length > 0) {
        arr.push(x.toLowerCase());
        live = true;
      } else {
        arr.push('_');
      }
    }

    var scrab = arr.join('');
    //makes into a string

    if (!live) {
      $('#results').html("<button id='enterPrompt'>Enter some letters!</button>");
    } else {
      $.get('/words/' + scrab, function handler(data) {
        data = data.split(',');
        var results = '';
        for(var i = 0; i < data.length; i++) {
          results += "<button class='suggestions'>" + data[i] + "</button>";
        }
        $('#results').html(results);
      });
    }
    //$('#results').html(new Date().getTime());
  });
});
