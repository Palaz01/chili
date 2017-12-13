const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');


// Copy Html
gulp.task('CopyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('prod'));
});

// Minimalize images

gulp.task('imagemin', () =>
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('prod/img'))
);

// Sass Compile

gulp.task('sass', function(){
  gulp.src('src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('prod/css'));
});

gulp.task('compress', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('prod/js'));
});

// Default

gulp.task('default', ['sass', 'imagemin', 'CopyHtml', 'compress']);

// Watch files

gulp.task('watch', function(){
  gulp.watch('src/img', ['imagemin']);
  gulp.watch('src/sass/*.sass', ['sass']);
  gulp.watch('src/*.html', ['CopyHtml']);
  gulp.watch('src/js/*.js', ['compress'])
});
