/* istanbul ignore next */
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsbeautifier: {
      files: ['*.js', '*.json', '!*.min.js'],
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
          src: ['*.js', 'get_names.js', '!Gruntfile.js', '!**/node_modules/**', '!command.js'],
          dest: './uglify',
          ext: '.js'
        }]
      }
    },
    shell: {
      publish: {
        command: [
          'mkdir cover_files',
          'grunt uglify:puplish',
          'cp connected.js ./cover_files/connected.js',
          'mv ./uglify/connected.js connected.js',
          'rm -rf ./uglify',
          'npm publish',
          'rm ./connected.js',
          'mv ./cover_files/connected.js ./connected.js',
          'rm -rf cover_files'
        ].join('&&')
      }
    }
  });
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jsbeautifier']);
  grunt.registerTask('publish', ['shell:publish']);
};
