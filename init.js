var fileUtils = require("./fileUtils.js");
var ffmpeg = require("./ffmpegUtils.js");



if (process.argv.length < 4) {
    console.log("Error no se ha indicado todos los parámetros ");
    process.exit(-1);
}





var path= process.argv[2];
console.log("Directorio "+path);



var pathOut = path+"/out/";
var extension = "avi";
var formatOutput = process.argv[3];
console.log("Formato "+formatOutput);




var files = fileUtils.getFilesFromDirWithExtension(path,extension);


console.log("Estos son los ficheros del diretorio "+ path)
files.forEach(function(value) {

  var fileIn = path+"/"+value;

  var name = fileUtils.getFileNameWithoutExtension(value);
  console.log(name);


  ffmpeg.convert(fileIn, pathOut, name, formatOutput);

});
