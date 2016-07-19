var fs = require("fs");

/*
* Comprueba si existe el fichero
*/
var existsFile = function(path){

  return fs.existsSync(path);

};

/*
* Recuperación de los ficheros existentes en el diretorio
*/
var getFilesFromDir = function(dir){

    if (fs.existsSync(dir)){
      return fs.readdirSync(dir);
    }

};

/**
* Recupera un objeto File
*/
var getFile = function(dir, fileName){
  var path = dir +"/"+fileName;
  return fs.statSync(path);
};

/*
* Recuperación de los ficheros con una extensión específica
*/
var getFilesFromDirWithExtension = function(dir,extension){

    if (fs.existsSync(dir)){
      return fs.readdirSync(dir).filter(function(element){
    		return element.substr(element.length-3,element.length)==extension;
    	});
    }

};


/*
* Recupera el nombre sin la extensión
*/
var getFileNameWithoutExtension = function(fileName){

  var position = fileName.lastIndexOf("\.");
  return fileName.substr(0, position);

}


/*
*Recupera la extensión
*/
var getExtension = function(fileName){
  var position = fileName.lastIndexOf("\.");
  return fileName.substr(position+1, fileName.length);
}


exports.existsFile = existsFile;
exports.getFilesFromDir = getFilesFromDir;
exports.getFilesFromDirWithExtension = getFilesFromDirWithExtension;
exports.getFile = getFile;
exports.getFileNameWithoutExtension = getFileNameWithoutExtension;
exports.getExtension = getExtension;
