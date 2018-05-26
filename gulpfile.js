var gulp = require('gulp'),
    less = require('gulp-less'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var _path = './resources';

gulp.task('less', function () {
    return gulp.src(_path + '/less/**/*.less') // 1、找到less目录下的所有less文件
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(sourcemaps.init())
        .pipe(less({ // 2、执行less()方法编译为css
            plugins: [autoprefix]
        }))
        // .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(_path + '/css')); // 3、另存为css路径
})

gulp.task('watch', ['less'], function () { //在命令行gulp watch启动此监听less文件修改的任务
    gulp.watch([_path + '/less/**/*.less',_path + '/less/*.less'], ['less']);//监听文件修改，当文件修改则执行less任务
});

gulp.task('default', ['watch']);//使用gulp.task('default')定义默认任务，默认任务就是监听文件修改