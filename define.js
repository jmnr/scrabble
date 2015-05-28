function ajaxGetRequestWordnik (searchurl, callback){
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var JSONresponse = JSON.parse(httpRequest.responseText).response.results;
        callback(JSONresponse);
      } else {
        console.log('There was a problem with the request.');
      }
    }
  };
  httpRequest.open("GET", searchurl, true);
  httpRequest.send();

  return httpRequest;
}






 console.log("# ac.define returns a definition for words");
 ac.define(function (err, definition) {
   assert.equal(ac.define, );
 });
