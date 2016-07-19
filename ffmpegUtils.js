var ffmpeg = require('fluent-ffmpeg');

//ffmpeg -i ElRenacido.avi -b:a 192K out.mp3

var convert = function(inPath, outPath, fileName, format ){

  var command = ffmpeg(inPath)
  .addOption('-b:a', '192K')
	.on('start', function(commandLine) {
		console.log('FFmpeg start Command:' + commandLine);
	})
	.on('error', function(err, stdout, stderr) {
		console.log('An error occurred: ' + err.message);
	})
	.on('end', function(stdout, stderr){
	   console.log('FFmpeg start Command ' );

	})
	.saveToFile(outPath+fileName+"."+format);

};


exports.convert = convert;
