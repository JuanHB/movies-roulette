/*
 * Modules in this script
 * */
var gulp        = require('gulp');
var inject      = require('gulp-inject');

var paths = {
    appJs : [
        'application/**/*.module.js',
        'application/**/*.config.js',
        'application/**/*.locale.js',
        'application/**/*.states.js',
        'application/**/*.service.js',
        'application/**/*.dataService.js',
        'application/**/*.provider.js',
        'application/**/*.controller.js',
        'application/**/*.directive.js',
        'application/**/*.run.js',
        '!application/**/appConfig.provider.js'
    ]
};

/*
 * Do the files inject in the index.html file
 * */
gulp.task('index', function(){
    return gulp.src('index.html')

        /*
         * Application .js files
         * called as: <!-- inject:appJs:js -->
         * */
        .pipe(
            inject(
                gulp.src(paths.appJs, {read: false}),
                {relative: true, starttag: '<!-- inject:appJs:{{ext}} -->'}
            )
        )
        .pipe(gulp.dest('./'));
});



