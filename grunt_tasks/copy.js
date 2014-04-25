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
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs.js', dest: '<%= configs.vendors %>/hbs.js'},
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs/handlebars.js', dest: '<%= configs.vendors %>/hbs/handlebars.js'},
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs/i18nprecompile.js', dest: '<%= configs.vendors %>/hbs/i18nprecompile.js'},
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs/json2.js', dest: '<%= configs.vendors %>/hbs/json2.js'},
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs/underscore.js', dest: '<%= configs.vendors %>/hbs/underscore.js'},

            // bower assets
            {src: '<%= configs.bower %>/toastr/toastr.min.css', dest: '<%= configs.styles %>/toastr.css'},
            

            {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.min.js', dest: '<%= configs.vendors %>/bootstrap.js'},
            {src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.min.css', dest: '<%= configs.styles %>/bootstrap.css'},
            {expand: true, cwd: '<%= configs.bower %>/bootstrap/dist/fonts/', src: '*', dest: '<%= configs.fonts %>'},
            

            // application
            {src: '<%= configs.src %>/assets/index.html', dest: '<%= configs.web %>/index.html'},
            {src: '<%= configs.src %>/assets/justified-nav.css', dest: '<%= configs.web %>/styles/justified-nav.css'},
            {src: '<%= configs.src %>/assets/custom.css', dest: '<%= configs.web %>/styles/custom.css'},
            {expand: true, cwd: '<%= configs.src %>/scripts/', src: '*', dest: '<%= configs.scripts %>'}
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
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs.js', dest: '<%= configs.vendors %>/hbs.js'},
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs/handlebars.js', dest: '<%= configs.vendors %>/hbs/handlebars.js'},
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs/i18nprecompile.js', dest: '<%= configs.vendors %>/hbs/i18nprecompile.js'},
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs/json2.js', dest: '<%= configs.vendors %>/hbs/json2.js'},
            {src: '<%= configs.bower %>/require-handlebars-plugin/hbs/underscore.js', dest: '<%= configs.vendors %>/hbs/underscore.js'},
            
            // bower assets
            {src: '<%= configs.bower %>/toastr/toastr.css', dest: '<%= configs.styles %>/toastr.css'},
            
            {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.js', dest: '<%= configs.vendors %>/bootstrap.js'},
            {src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.css', dest: '<%= configs.styles %>/bootstrap.css'},
            {expand: true, cwd: '<%= configs.bower %>/bootstrap/dist/fonts/', src: '*', dest: '<%= configs.fonts %>'},


            // application
            {src: '<%= configs.src %>/assets/index.html', dest: '<%= configs.web %>/index.html'},
            {src: '<%= configs.src %>/assets/justified-nav.css', dest: '<%= configs.web %>/styles/justified-nav.css'},
            {src: '<%= configs.src %>/assets/custom.css', dest: '<%= configs.web %>/styles/custom.css'},
            {expand: true, cwd: '<%= configs.src %>/scripts/', src: '**', dest: '<%= configs.scripts %>'}
        ]
    }
};