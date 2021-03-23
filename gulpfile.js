let project__folder = 'build';
let source__folder = '#src';

let fs = require('fs');

let path = {
	build: {
		html: project__folder + '/',
		css: project__folder + '/css/',
		js: project__folder + '/js/',
		img: project__folder + '/img/',
		fonts: project__folder + '/fonts/'
	},
	src: {
		html: [source__folder + '/*.html', '!' + source__folder + '/_*.html'],
		css: source__folder + '/scss/style.scss',
		js: source__folder + '/js/script.js',
		img: source__folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
		fonts: source__folder + '/fonts/*.ttf'
	},
	watch: {
		html: source__folder + '/**/*.html',
		css: source__folder + '/scss/**/*.scss',
		js: source__folder + '/js/**/*.js',
		img: source__folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
		fonts: source__folder + '/fonts/*.ttf'
	},
	clean: './' + project__folder + '/'
}

const fileinclude = require('gulp-file-include');
const { src, dest } = require('gulp');
const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const del = require('del');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean_css = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');



// следим за изменениями
function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: './' + project__folder + '/'
		},
		port: 3000
	})
}


// скинул из папки css в build стили
function html() {
	return src(path.src.html)
		.pipe(fileinclude())
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream())
}


// скинул из папки css в build стили
function css() {
	return src(path.src.css)
		.pipe(scss({ outputStyle: 'expanded' }))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 5 versions'],
				cascade: true
			})
		)
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream())
}


// скинул из папки js в build скрипты
function js() {
	return src(path.src.js)
		.pipe(fileinclude())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(dest(path.build.js))
		.pipe(
			uglify()
		)
		.pipe(
			rename({
				extname: ".min.js"
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream())
}


// скинул из папки src в build картинки
function images() {
	return src(path.src.img)
		.pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream())
}


// готовим шрифты
function fonts() {
	src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts))
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts));
}


// callback функция
function cb() { } 


// смотрим файлы
function watchFiles(params) {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
}


// очистка
function clean(params) {
	return del(path.clean);
}




let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

