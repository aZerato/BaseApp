module.exports = {
	debug: {
		files: '<%= configs.src %>/**',
		tasks: ['debug'],
		options: {
			livereload: true
		}
	}
};