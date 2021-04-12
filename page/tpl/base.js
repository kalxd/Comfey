/** nunjucks最基本配置 */

// 支持的颜色列表。
const COLOR_SET = [
	"white",
	"red",
	"green",
	"blue",
	"yellow",
	"orange",
	"purple",
	"cyan"
];

// 模板路径。
const tpl = "./tpl/layout.njk";

// 全局常量。
const globalVar = {
	colors: COLOR_SET,
	tpl,
};

module.exports = {
	globalVar
};
