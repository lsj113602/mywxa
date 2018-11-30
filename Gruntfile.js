const grunt = require('grunt');

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-eslint');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.initConfig({
  eslint: {
    target: [
      'pages/**.js',
      // 'base/**.js',
      // 'promisify/**.js',
    ],
  },
  watch: {
    scss: {
      files: '**/*.scss',
      tasks: ['sass'],
      options: {
        interrupt: true,
      },
    },
    js: {
      files: '**/*.js',
      tasks: ['eslint'],
      options: {
        interrupt: true,
      },
    },
  },
  sass: {
    dist: {
      options: {
        sourcemap: 'none',
        trace: true,
        style: 'compressed',
        debugInfo: true,
      },
      files: [{
        expand: true,
        cwd: './',
        src: ['./**/*.scss', '!./**/_*.scss'],
        dest: './',
        ext: '.wxss',
      }],
    },
  },
});
