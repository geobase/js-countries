var fs = require('fs');
var path = require('path');

var ignore = [
  'polygon.json'
];

function scanDir(dir) {
  var files = fs.readdirSync(dir);
  var filepath;
  var subFiles;
  var returnValue = [];
  for (var i = 0, len = files.length; i < len; ++i) {
    if (files[i].charAt(0) !== '.' && ignore.indexOf(files[i]) === -1) {
      filepath = path.resolve(path.join(dir, files[i]));
      if (fs.lstatSync(filepath).isDirectory()) {
        subFiles = scanDir(path.join(dir, files[i]));
        returnValue.push.apply(returnValue, subFiles);
      } else {
        returnValue.push({
          file: path.join(dir, files[i]).replace(/^storage\//, ''),
          filepath: filepath
        });
      }
    }
  }
  return returnValue;
};

module.exports = function(source) {
  var files = scanDir('./storage');
  var file;
  var data;

  for (var i = 0, len = files.length; i < len; ++i) {
    file = files[i];
    data = 'storage[\'' + file.file + '\'] = require(\'./../storage/' + file.file + '\');\n';
    source = data + source;
  }
  source = 'var storage = {};\n' + source;

  return source;
};
