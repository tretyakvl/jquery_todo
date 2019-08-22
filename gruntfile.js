module.exports = function (grunt) {
  const sass = require('node-sass');
  require('jit-grunt')(grunt, {
    postcss: '@lodder/grunt-postcss'
  });

  grunt.initConfig({
    watch: {
      sass: {
        files: ['source/sass/**/*.scss'],
        tasks: ['sass']
      },
      browserify: {
        files: ['source/js/main.js', 'source/js/modules/**/*.js'],
        tasks: ['browserify']
      }
    },
    sass: {
      options: {
        implementation: sass
      },
      dev: {
        files: {
          'source/css/style.css': 'source/sass/main.scss'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'source/css/*.css',
            'source/*.html',
            'source/js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: 'source/',
          browser: 'firefox'
        }
      }
    },
    svgstore: {
      options: {
        inheritviewbox: true,
        includeTitleElement: false,
        cleanup: ['fill', 'fill-rule']
      },
      default: {
        files: {
          'source/img/sprite.svg': ['source/img/inline/*.svg'],
        },
      },
    },
    browserify: {
      default: {
        files: {
          'source/js/output.js': 'source/js/main.js'
        },
        options: {
          plugin: [
            'tinyify'
          ]
        }
      }
    },
    clean: {
      build: ['build/*']
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'source/',
            src: ['css/**', 'img/*.*', 'js/output.js', '**/*.html'],
            dest: 'build/'
          }
        ]
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')(),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'build/css/*.css'
      }
    },
    svgmin: {
      link: {
        files: [
          {
            expand: true,
            cwd: 'build/img',
            src: ['*.svg', '!sprite.svg'],
            dest: 'build/img'
          }
        ]
      },
      inline: {
        files: {
          'build/img/sprite.svg': 'build/img/sprite.svg'
        },
        options: {
          plugins: [
            {
              cleanupIDs: false
            }
          ]
        }
      }
    }
  });

  grunt.registerTask('server', ['sass', 'browserify', 'browserSync', 'watch']);
  grunt.registerTask('build', ['sass', 'browserify', 'clean', 'copy', 'postcss', 'svgmin']);
};
