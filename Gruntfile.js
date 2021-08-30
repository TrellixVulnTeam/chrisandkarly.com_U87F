module.exports = function(grunt) {

function loadConfig(path) {
  var glob = require('glob');
  var object = {};
  var key;
 
  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require(path + option);
  });
 
  return object;
}

var config = {
  pkg: grunt.file.readJSON('package.json'),
  env: process.env,
    svgstore: {
    options: {
      prefix : 'icon-',
      svg: { 
        style : "display: none;",
        viewBox : '0 0 100 100',
        xmlns: 'http://www.w3.org/2000/svg'
      }
    },
    default: {
      files: {
        "_includes/svg-defs.svg": ["img/svg/*.svg"]
      }
    },
  }
};

grunt.loadTasks('tasks');


grunt.util._.extend(config, loadConfig('./tasks/options/'));
 
grunt.initConfig(config);

require('load-grunt-tasks')(grunt);
  // Default task(s).
grunt.registerTask('default', ['concat', 'uglify', 'svgstore', 'watch']);
};
