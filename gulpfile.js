const gulp = require("gulp");
const less = require("gulp-less");

const build = cb => {
	return gulp.src("src/main.less")
		.pipe(less())
		.pipe(gulp.dest("dist/Comfey.css"))
	;
};

const watch = () => {
	return gulp.watch("src/**/*.less", build);
};

exports.default = build;
exports.watch = watch;
