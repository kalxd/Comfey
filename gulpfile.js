const gulp = require("gulp");
const less = require("gulp-less");
const nunjucks = require("gulp-nunjucks");
const rename = require("gulp-rename");

const pkg = require("./package.json");

const Nunjucks = require("./page/tpl/base");


const buildCss = () => {
	return gulp.src("src/comfey.less")
		.pipe(less())
		.pipe(rename({
			basename: `comfey.${pkg.version}`
		}))
		.pipe(gulp.dest("dist"))
	;
};

const buildHtml = () => {
	return gulp.src("page/*.njk")
		.pipe(nunjucks.compile(Nunjucks.globalVar))
		.pipe(gulp.dest("dist"))
	;
};

const devCss = () => {
	return gulp.src("src/comfey.less")
		.pipe(less())
		.pipe(gulp.dest("dist"))
	;
};

const watchLess = () => gulp.watch("src/**/*.less", devCss);

const watchHtml = () => gulp.watch("page/**/*.njk", buildHtml);

const watch = gulp.parallel(watchLess, watchHtml);

const build = gulp.parallel(buildCss, buildHtml, devCss);

module.exports = {
	default: build,
	buildCss,
	buildHtml,
	watch
};
