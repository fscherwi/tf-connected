module.exports = function(grunt) {

  grunt.initConfig({
    // default

    pkg: grunt.file.readJSON('package.json'),
    jsbeautifier: {
      files: ["*.js", "*.json", "!*.min.js"],
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
    },
    shell: {
      options: {
        stderr: false
      },
      target: {
        command: 'istanbul cover command.js'
      }
    }

  });
  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jsbeautifier']);
  grunt.registerTask('cover', ['jsbeautifier', 'shell']);
  grunt.registerTask('min', ['clean', 'uglify']);

};
