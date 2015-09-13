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
      new_folder: {
        command: 'mkdir publish_files'
      },
      copy: {
        command: 'cp command.js ./publish_files/command.js'
      },
      minify: {
        command: 'grunt uglify:puplish'
      },
      add_readme: {
        command: 'cp ./README.md ./publish_files/README.md'
      },
      cd: {
        command: 'cd ./publish_files'
      },
      publish: {
        command: 'npm publish'
      },
      cd_back: {
        command: 'cd ..'
      },
      remove_folder: {
        command: 'rm -rf publish_files'
      }
    }

  });
  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jsbeautifier']);
  grunt.registerTask('publish', ['shell']);

};
