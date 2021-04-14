/** nunjucks最基本配置 */

// 支持的颜色列表。
const COLOR_SET = [
	"",
	"teal",
	"green",
	"blue",
	"purple",
	"black",
	"yellow",
	"orange",
	"red",
	"grey"
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
