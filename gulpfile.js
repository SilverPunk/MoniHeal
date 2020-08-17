let gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync   = require('browser-sync').create();
 		sass.compiler = require('node-sass');
 		watch = require('gulp-watch');

gulp.task('html', function(){
	return gulp.src('app/index.html')
	.pipe(browserSync.reload({
		stream: true
	}))
});
gulp.task('scss', function(){
	return gulp.src('style.scss')
	.pipe(sass({outputStyle: 'nested'}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});
gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	});
});
gulp.task('watch', function(){
	gulp.watch('style.scss', gulp.parallel('scss'))
	gulp.watch('app/index.html', gulp.parallel('html'))
});
gulp.task('default', gulp.parallel('browser-sync', 'watch'));