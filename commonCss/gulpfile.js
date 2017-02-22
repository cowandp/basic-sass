var gulp = require('gulp');
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');

var input = './src/**/*.scss';
var prodOutput = "./dist/css";
var output = "../../server_location/cor/css";

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function () {
    // Find all `.scss` files from the `stylesheets/` folder
    var sassStream = gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError));

    return merge(sassStream)
        .pipe(concat('common_cor.css'))
        .pipe(gulp.dest(output));
});

var sassdocOptions = {
    dest: './dist/sassdoc'
};
gulp.task('sassdoc', function () {
    return gulp
        .src(input)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});

gulp.task('watch', function () {
    return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
        .watch(input, ['sass'])
        // When there is a change,
        // log a message in the console
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('prod', function () {
    var sassStream = gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError));

    return merge(sassStream)
        .pipe(concat('common_cor.css'))
        .pipe(minify())
        .pipe(gulp.dest(prodOutput));
});

gulp.task('default', ['sass', 'watch' /*, possible other tasks... */]);
