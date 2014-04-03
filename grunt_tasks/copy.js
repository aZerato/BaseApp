module.exports = {
    prod: {
        files: [
            // bower vendors
			{src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.vendors %>/require.js'},
            {src: '<%= configs.bower %>/jquery/dist/jquery.min.js', dest: '<%= configs.vendors %>/jquery.js'},
            {src: '<%= configs.bower %>/toastr/toastr.min.js', dest: '<%= configs.vendors %>/toastr.js'},

            {src: '<%= configs.bower %>/underscore/underscore.js', dest: '<%= configs.vendors %>/underscore.js'},
            {src: '<%= configs.bower %>/backbone/backbone.js', dest: '<%= configs.vendors %>/backbone.js'},
            {src: '<%= configs.bower %>/backbone.marionette/lib/backbone.marionette.min.js', dest: '<%= configs.vendors %>/backbone.marionette.js'},

            {src: '<%= configs.bower %>/handlebars/handlebars.min.js', dest: '<%= configs.vendors %>/handlebars.js'},

            {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.min.js', dest: '<%= configs.vendors %>/bootstrap.js'},

            // bower assets
            {src: '<%= configs.bower %>/toastr/toastr.min.css', dest: '<%= configs.styles %>/toastr.min.css'},
            {src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.min.css', dest: '<%= configs.styles %>/bootstrap.css'},
        
            // application
            {src: '<%= configs.src %>/assets/index.html', dest: '<%= configs.web %>/index.html'},
            {src: '<%= configs.src %>/scripts/require-config.js', dest: '<%= configs.scripts %>/require-config.js'},
            {src: '<%= configs.src %>/scripts/application.js', dest: '<%= configs.scripts %>/application.js'},
            {src: '<%= configs.src %>/scripts/models/Todo.js', dest: '<%= configs.scripts %>/models/Todo.js'}
        ]
    },
    debug: {
        files: [
            // bower vendors
			{src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.vendors %>/require.js'},
            {src: '<%= configs.bower %>/jquery/dist/jquery.js', dest: '<%= configs.vendors %>/jquery.js'},
            {src: '<%= configs.bower %>/toastr/toastr.js', dest: '<%= configs.vendors %>/toastr.js'},

            {src: '<%= configs.bower %>/underscore/underscore.js', dest: '<%= configs.vendors %>/underscore.js'},
            {src: '<%= configs.bower %>/backbone/backbone.js', dest: '<%= configs.vendors %>/backbone.js'},
            {src: '<%= configs.bower %>/backbone.marionette/lib/backbone.marionette.js', dest: '<%= configs.vendors %>/backbone.marionette.js'},

            {src: '<%= configs.bower %>/handlebars/handlebars.js', dest: '<%= configs.vendors %>/handlebars.js'},

            {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.js', dest: '<%= configs.vendors %>/bootstrap.js'},

            // bower assets
            {src: '<%= configs.bower %>/toastr/toastr.css', dest: '<%= configs.styles %>/toastr.css'},
            {src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.css', dest: '<%= configs.styles %>/bootstrap.css'},

            // application
            {src: '<%= configs.src %>/assets/index.html', dest: '<%= configs.web %>/index.html'},
            {src: '<%= configs.src %>/scripts/require-config.js', dest: '<%= configs.scripts %>/require-config.js'},
            {src: '<%= configs.src %>/scripts/application.js', dest: '<%= configs.scripts %>/application.js'},
            {src: '<%= configs.src %>/scripts/models/Todo.js', dest: '<%= configs.scripts %>/models/Todo.js'}
        ]
    }
};