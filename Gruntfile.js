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
        banner: '/*! <%= pkg.name %> ©<%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n '
      },
      build: {
        files: [{
          expand: true,
          cwd: './',
          src: ['*.js', '!Gruntfile.js', '!**/node_modules/**'],
          dest: './',
          ext: '.js'
        }]
      }
    },
    replace: {
      coverage: {
        src: ['*.js', '!Gruntfile.js'],
        overwrite: true,
        replacements: [{
          from: '/* istanbul ignore next */',
          to: ''
        }]
      },
      min: {
        src: ['command.js'],
        overwrite: true,
        replacements: [{
          from: '#!/usr/bin/env node',
          to: ''
        }]
      },
    },
    shell: {
      new_folder: {
        command: 'mkdir coverage_files'
      },
      copy: {
        command: 'cp *.js ./coverage_files'
      },
      move_1: {
        command: 'cp ./coverage_files/command.js ./coverage_files/command_1.js'
      },
      replace_coverage: {
        command: 'grunt replace:coverage'
      },
      prepare_min: {
        command: 'grunt replace:min'
      },
      minify: {
        command: 'grunt min'
      },
      add_readme: {
        command: 'mv ./README.md ./coverage_files/README.md'
      },
      publish: {
        command: 'npm publish'
      },
      move_2: {
        command: 'cp ./coverage_files/command_1.js ./coverage_files/command.js'
      },
      move_back: {
        command: 'mv ./coverage_files/*.js ./'
      },
      remove_folder: {
        command: 'rm -rf coverage_files'
      }
    }

  });
  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jsbeautifier']);
  grunt.registerTask('cover', ['jsbeautifier']);
  grunt.registerTask('publish', ['shell']);

};
