/* istanbul ignore next */
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsbeautifier: {
      files: ["*.js", "*.json", "!*.min.js"],
      options: {
        js: {
          indentSize: 2
        }
      }
    },
    uglify: {
      options: {
        removeComments: true,
        banner: '/*! <%= pkg.name %> ©<%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n '
      },
      puplish: {
        files: [{
          expand: true,
          cwd: './',
          src: ['*.js', '!Gruntfile.js', '!**/node_modules/**', '!command.js'],
          dest: './publish_files',
          ext: '.js'
        }]
      }
    },
    shell: {
      publish: {
        command: [
          'mkdir publish_files',
          'cp command.js ./publish_files/command.js',
          'cp ./README.md ./publish_files/README.md',
          'grunt uglify:puplish',
          'cd ./publish_files',
          'npm publish',
          'cd ..',
          'rm -rf publish_files'
        ].join('&&')
      }
    }

  });
  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jsbeautifier']);
  grunt.registerTask('publish', ['shell:publish']);

};
