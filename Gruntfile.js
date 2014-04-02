module.exports = function(grunt) {

    /**
* tasks configurations.
*/
    var config = require('./grunt_tasks/config');
    var connect = require('./grunt_tasks/connect');
    var clean = require('./grunt_tasks/clean');
    var copy = require('./grunt_tasks/copy');

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      configs: config,
      connect: connect,
      clean: clean,
      copy: copy
    });

      /**
* load tasks.
*/
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    /*
* register tasks
*/
    grunt.registerTask('prod', [
        'clean',
        'copy:prod'
    ]);

    grunt.registerTask('debug', [
        'clean',
        'copy:debug'
    ]);

    grunt.registerTask('run', [
      'connect'
    ]);

};