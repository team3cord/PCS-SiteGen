fs = require('fs');

//var postsArray = fs.readdirSync(__dirname + '/../posts');

var postBatch = function(postPath){

  var postsArray = fs.readdirSync(postPath); // create array from posts directory  
  var collector=[];      //collects file names
  var fileCollector=[];  //collects file contents

  ////////////////////////////////
  postsArray.forEach(function cleanFiles (value, index, array){
    // var inFile;  //takes fs incoming file
    var pattern = new RegExp(".jade");   //match file .jade
    if ( pattern.test(value)  )  // file IS dot jade
      {
      // inFile = fs.readFileSync( __dirname + postPath + postsArray[index]  );
      // inFile = jade.render(inFile);   //make jade into html
      fileCollector.push(value);    //keep file content		
      // collector.push(value);         //keep file name, not really needed?
      // console.log("Is a dot jade file.");
      }
    else
      { // console.log("DID NOT FIND dot jade FILE."); 
      }
  return fileCollector;
  });
  return fileCollector;
};
var consoleMe = function(me){
  console.log(me);
};
module.exports.postBatch = postBatch;
module.exports.consoleMe = consoleMe;
