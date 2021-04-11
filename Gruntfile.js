const banner = `/**
<%= pkg.name %> v<%= pkg.version %>
作者：<%= pkg.author %>
*/`;

const doTask = grunt => {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// less task
		less: {
			options: {
				paths: "./src",
				rootPath: "./src",
				banner
			},

			build: {
				src: "./src/comfey.less",
				dest: "dist/comfey.css"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");

	grunt.registerTask("default", ["less"]);
};

module.exports = doTask;
