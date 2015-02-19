// Gulp & plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require ('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	notify = require("gulp-notify");

// Sources
var src = {
	images: 'src/images/*.{gif,jpg,png,svg,ico}',
	sass: 'src/sass/',
	scss: 'src/sass/**/*.scss',
	php: '**/*.php',
	js: 'src/js/**/*.js'
}

// Destinations
var dest = {
	images: 'app/dest/images',
	css: 'app/',
	js: 'app/dest/js'
}



// TASKS
// Compile Scripts & Check for errors
gulp.task('scripts', function() {

	return gulp.src(src.js)
		.on("error", notify.onError({
			title: "Uglify JS error",
			message: "<%= error.message %>"
		}))
		.pipe(gulp.dest(dest.js))

});

// Compile Scripts.min
gulp.task('scripts-min', function() {

	return gulp.src(src.js)
		.pipe(uglify())
		.on("error", notify.onError({
			title: "Uglify JS error",
			message: "<%= error.message %>"
		}))
		.pipe(gulp.dest(dest.js))

});

// Compile SASS
gulp.task('styles', function () {

	return sass(src.sass, {
			style: 'expanded',
			sourcemap: true
		})
		.on("error", notify.onError({
			title: "SASS Compile error",
			message: "<%= error.message %>"
		}))
		.pipe(autoprefixer({
			cascade: false
        }))
		.pipe(gulp.dest(dest.css))
		.pipe(reload({
			stream:true
		}))
		.pipe(notify({
			message: 'SASS approves this syntax!',
			onLast: true,
			sound: 'Hero'
		}));

});

// Compile SASS.min
gulp.task('styles-min', function () {

	return sass(src.sass, {
			style: 'compressed'
		})
		.on("error", notify.onError({
			title: "SASS Compile error",
			message: "<%= error.message %>"
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest(dest.css))
		.pipe(notify({
			message: 'SASS approves this syntax!',
			onLast: true,
			sound: 'Hero'
		}));

});

// Optimize images
gulp.task('images', function () {
	return gulp.src(src.images)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false,
				cleanupIDs: false,
				cleanupAttrs: false
			}],
			use: [pngquant()]
		}))
		.on("error", notify.onError({
			title: "Image Optimization error",
			message: "<%= error.message %>"
		}))
		.pipe(gulp.dest(dest.images))
});

// Browser-sync
gulp.task('browser-sync', function() {
	browserSync({
		proxy: "localhost:8888",
		ghostMode: false,
		// tunnel: 'projectr',
		open: false
	});
	gulp.watch(src.php, reload);
	gulp.watch(['style.css'], reload);
	gulp.watch(dest.images, reload);
	gulp.watch(src.js, reload);
});

// Watch
gulp.task('watch', function() {
	gulp.watch(src.sass, ['styles']);
})

// Default
gulp.task('default', ['styles', 'browser-sync'], function(){
	gulp.watch(src.scss, ['styles']);
	gulp.watch(src.js, ['scripts']);
});

// Production
gulp.task('production', ['scripts-min', 'styles-min', 'images']);
