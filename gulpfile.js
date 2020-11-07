const gulp = require("gulp");
const less = require("gulp-less");
const nunjucks = require("gulp-nunjucks");

const COLOR_SET = [
	"red",
	"green",
	"blue",
	"yellow",
	"orange",
	"purple",
	"cyan"
];

// nunjucks数据。
const DATA = {
	"colorSet": COLOR_SET
};

const buildCss = () => {
	return gulp.src("src/comfey.less")
		.pipe(less())
		.pipe(gulp.dest("dist"))
	;
};

const buildHtml = () => {
	return gulp.src("build/index.njk")
		.pipe(nunjucks.compile(DATA))
		.pipe(gulp.dest("dist"))
	;
};

const watchLess = () => gulp.watch("src/**/*.less", buildCss);

const watchHtml = () => gulp.watch("build/**/*.njk", buildHtml);

const watch = gulp.parallel(watchLess, watchHtml);

const build = gulp.series(buildCss, buildHtml);

module.exports = {
	default: build,
	buildCss,
	buildHtml,
	watch
};
