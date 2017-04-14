var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css');

    // ---------------------Уведомления внизу
    // notify = require("gulp-notify"),
    // ------------------------

    // autoprefixer = require('gulp-autoprefixer');


gulp.task('default',function (){
    gulp.src('css/*.css')
        .pipe(concatCSS('bundle.css'))
        .pipe(gulp.dest('app/css/'))
        .pipe(cleanCSS(''))
        .pipe(rename('bundle.min.css'))
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: false
        // }))


    // ---------------Уведомления внизу
        // .pipe(notify("Done !!!"));

});
// gulp.task('watch', function () {
//     gulp.watch('css/*.css',['default'])
// })