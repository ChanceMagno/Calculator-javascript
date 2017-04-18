var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('myTask', function(){
  console.log('hello Taylor');
});

// gulp.task('jsBrowserify', function() {
//   return browserify({ entries: ['./js/pingpong-interface.js'] })
//     .bundle()
//     .pipe(source('app.js'))
//     .pipe(gulp.dest('./build/js'));
// });

gulp.task('browserify', function() {
  return browserify({ entries: ['./js/weather-interface.js', './js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });

  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
  gulp.watch(['*.html'], ['htmlBuild']);
});

gulp.task('htmlBuild', function() {
  browserSync.reload();
});
//more dependencies will be added here.
