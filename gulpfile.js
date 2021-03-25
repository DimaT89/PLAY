const {
    src,
    dest,
    watch,
    parallel,
    series
} = require('gulp');

const scss = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');

function styles() {
    return src([
        'node_modules/slick-carousel/slick/slick.scss',
        // 'node_modules/slick-carousel/slick/slick-theme.scss',
        'app/scss/style.scss',
    ])
        .pipe(scss({
            outputStyle: 'compressed'
        }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function build() {
    return src([
            'app/css/style.min.css',
            // 'app/fonts/**/*',
            // 'node_modules/slick-carousel/slick/fonts/**/*',
            'app/js/lib.min.js',
            'app/js/main.min.js',
            'app/*.html',
            '!app/_*.html'
        ], {
            base: 'app'
        })
        .pipe(dest('dist'));
}

function fonts() {
    return src([
            'app/fonts/**/*'
        ])
        .pipe(dest('app/fonts'));
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch([
        'app/js/**/*.js',
        '!app/js/main.min.js',
        '!app/js/lib.min.js'
        ], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    });
}

function cleanDist() {
    return del('dist');
}

function images() {
    return src('app/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.mozjpeg({
                quality: 75,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [{
                        removeViewBox: true
                    },
                    {
                        cleanupIDs: false
                    }
                ]
            })
        ]))
        .pipe(dest('dist/images'));
}

function scripts() {
    return src([
            'app/js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

function scriptsLibs() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/slick-carousel/slick/slick.min.js',
        ])
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.scriptsLibs = scriptsLibs;
exports.fonts = fonts;

exports.build = series(cleanDist, images, fonts, build);
exports.default = parallel(styles, fonts, scriptsLibs, scripts, browsersync, watching);
