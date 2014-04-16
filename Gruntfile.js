module.exports = function(grunt) {

    /**
    * tasks configurations.
    */
    var config = require('./grunt_tasks/config');
    var connect = require('./grunt_tasks/connect');
    var clean = require('./grunt_tasks/clean');
    var copy = require('./grunt_tasks/copy');
    var watch = require('./grunt_tasks/watch');
    var concurrent = require('./grunt_tasks/concurrent');

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      configs: config,
      connect: connect,
      clean: clean,
      copy: copy,
      watch: watch,
      concurrent: concurrent
    });

    /**
    * load tasks.
    */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

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

    // Run a local server instance
    grunt.registerTask('run', [
      'connect:server'
    ]);

    // Launch parrallels tasks
    // - a watcher on "src/*" files launched "debug" task
    // - with a second task launch "run" task
    // you only have to refresh Browser tab
    grunt.registerTask('dev', [
      'concurrent:debugwatcher'
    ]);
};