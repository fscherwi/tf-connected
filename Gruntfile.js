module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsbeautifier: {
      files: ["*.js", "!*.min.js"],
      options: {
        js: {
          indentSize: 2
        }
      }
    },
    clean: {
      js: ["./*.min.js", "!./*.js"]
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd.mm.yyyy") %> © <%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n '
      },
      build: {
        files: [{
          expand: true,
          cwd: './',
          src: ['*.js', '!Gruntfile.js', '!command.js'],
          dest: './',
          ext: '.min.js'
        }]
      }
    }

  });
  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jsbeautifier', 'clean', 'uglify']);
};
