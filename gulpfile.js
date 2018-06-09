var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function () {
    // Start the server at the beginning of the task 
    server.run(['server.js']);
 
    // Restart the server when file changes 
    gulp.watch(['public/views/**/*.html', 'public/views/**/*.ejs'], server.notify);
    gulp.watch(['public/css/**/*.css'], server.notify);
    gulp.watch(['public/js/**/*.js'], server.notify);

    gulp.watch(['controllers/**/*.js', 'models/**/*.js', 'config.js', 'routes.js'], server.notify);
});