fs = require('fs');
jade = require('jade');

var postBatch = function(postPath){

  var postsArray = fs.readdirSync(postPath); // create array from directory  
  fileCollector=[];  //collects file contents

  postsArray.forEach(function cleanFiles (value, index, array){
    var pattern = new RegExp(".jade");   
    if ( pattern.test(value)  )  
      {
        var parsedfile = jade.renderFile(postPath + '/' + value);
        fileCollector.push(parsedfile);    
      }
  });
return fileCollector;
};
// test function  
var consoleMe = function(me){
  console.log(me);
};
module.exports.postBatch = postBatch;
module.exports.consoleMe = consoleMe;
