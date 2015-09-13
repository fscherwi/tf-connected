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
          src: ['*.js', '!Gruntfile.js', '!**/node_modules/**', '!command.js'],
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
      }
    },
    shell: {
      new_folder: {
        command: 'mkdir coverage_files'
      },
      copy: {
        command: 'cp *.js ./coverage_files'
      },
      replace_coverage: {
        command: 'grunt replace:coverage'
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
