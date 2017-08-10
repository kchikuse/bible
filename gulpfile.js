var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var babel  = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');
var gulpCopy = require('gulp-copy');
var addStream = require('add-stream');
var htmlreplace = require('gulp-html-replace');
var htmlmin = require('gulp-htmlmin');
var templateCache = require('gulp-angular-templatecache');

var DIST_FOLDER = 'dist/';

gulp.task('js', function() {
    return gulp.src([
            'libs/angular.js',
            'libs/angular-animate.js',
            'libs/angular-sanitize.js',
            'libs/angular-ui-router.js',
            'libs/ionic.js',
            'libs/ionic-angular.js',
            'bible.js',
            'scripts/app.js',
            'scripts/common/common.module.js',
            'scripts/common/services/bible.service.js',
            'scripts/common/services/state.service.js',
            'scripts/menu/menu.module.js',
            'scripts/menu/menu.controller.js',
            'scripts/home/home.module.js',
            'scripts/home/home.controller.js',
            'scripts/chapters/chapters.module.js',
            'scripts/chapters/chapters.controller.js',
            'scripts/verses/verses.module.js',
            'scripts/verses/verses.controller.js',     
            'scripts/popover-menu/popover-view.service.js'
        ])
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(addStream.obj(prepareTemplates()))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(DIST_FOLDER))
        //.pipe(uglify().on('error', console.log))
        .pipe(gulp.dest(DIST_FOLDER))
});

gulp.task('css', function() {
   return gulp.src('main.css')
    .pipe(cleanCSS())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest(DIST_FOLDER));
});

gulp.task('index', function () {
  gulp.src('index.html')
    .pipe(htmlreplace({
        'css': 'app.min.css',
        'libs': 'libs.min.js',
        'bible': 'bible.min.js',
        'js': 'app.min.js'
    }, { resolvePaths: false }))
    .pipe(gulp.dest(DIST_FOLDER));
});

gulp.task('copy', function() {
   return gulp.src([ 
    'fonts/*', 
    'LICENSE.txt', 
    'my.appcache', 
    'images/*.png' 
    ]).pipe(gulpCopy(DIST_FOLDER));
});

function prepareTemplates() {
  return gulp.src('scripts/**/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(templateCache('templates.js', { root: "scripts/" }));
}


gulp.task('default', ['js', 'css', 'copy', 'index']);