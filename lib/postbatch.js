fs = require('fs');
jade = require('jade');
//var postsArray = fs.readdirSync(__dirname + '/../posts');

var postBatch = function(postPath){

  var postsArray = fs.readdirSync(postPath); // create array from posts directory  
  var collector=[];      //collects file names
  fileCollector=[];  //collects file contents

  ////////////////////////////////
  postsArray.forEach(function cleanFiles (value, index, array){
    var pattern = new RegExp(".jade");   //match file .jade
    if ( pattern.test(value)  )  // file IS dot jade
      {
        var parsedfile = jade.render(value);
      fileCollector.push(parsedfile);    //keep file content		
     // console.log(parsedfile);
      }
    else
      { // console.log("DID NOT FIND dot jade FILE."); 
      }
  });
return fileCollector;
};
var consoleMe = function(me){
  console.log(me);
};
module.exports.postBatch = postBatch;
module.exports.consoleMe = consoleMe;
