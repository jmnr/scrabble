$(document).ready(function () {
  // $('.inputs').keyup(function(e) {
  //   var arr = [];
  //   var live = false;
  //   for(var i = 1; i < 7; i++) {
  //     var x = document.getElementById('search' + i).value;
  //     if(x.length > 0) {
  //       arr.push(x.toLowerCase());
  //       live = true;
  //     } else {
  //       arr.push('_');
  //     }
  //   }
  //
  //   var scrab = arr.join('');
  //
  //   if (!live) {
  //     $('#results').html("<p></p>");
  //   } else {
  //     $.get('/' + scrab, function handler(data) {
  //       data = data.split(',');
  //       console.log('results back -', data);
  //       var results = '';
  //       for(var i = 0; i < data.length; i++) {
  //         results += "<p> " + data[i] + "</p>";
  //       }
  //       $('#results').html(results);
  //     });
  //   }

    // var inputs = document.getElementsByClassName('inputs').value;
    // console.log(document.getElementById('search1').value);

    // var word = $('#search1').val();
    // if (word.length === 0) {
    //   $('#results').html("<p></p>");
    // }
    // if (word.length > 0) {
    //   $.get('/find/'+ word, function handler(data) {
    //     // console.log(data);
    //     var words = data.split(',');
    //     var results = '';
    //     for(var i = 0; i < words.length; i++) {
    //       results += "<p> " + words[i] + "</p>";
    //     }
    //     $('#results').html(results);
    //   });
    // }

    //$('#results').html(new Date().getTime());
  $('.inputs').keyup(function(e) {
    $('#results').html(new Date().getTime());
  });
});
