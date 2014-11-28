'use strict';

module.exports = function(grunt) {

//grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-rev');

grunt.initConfig({
	pkg: grunt.file.readJSON('../package.json'),
	meta: {
		banner:
		'/* \n'+
		' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n'+
		' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> \n'+
		' * <%= pkg.author %> \n'+
		' * \n'+
		' * Licensed under the <%= pkg.license %> license. \n'+
		' * \n'+
		' * Source: \n'+
		' * <%= pkg.repository.url %> \n'+
		' */\n'
	},
	clean: {
		dist: {
			src: ['dist/*']
		}
	},
	copy: {
        jquery: {
            nonull: true,
            src: 'node_modules/jquery/dist/jquery.min.js',
            dest: 'libs/jquery.js'
        },
        backbone: {
            nonull: true,
            src: 'node_modules/backbone/backbone-min.js',
            dest: 'libs/backbone.js'
        },
        "backbone.layoutmanager": {
            nonull: true,
            src: "node_modules/backbone.layoutmanager/backbone.layoutmanager.js",
            dest: "libs/backbone.layoutmanager.js"
        },
        bootstrap_js: {
            nonull: true,
            src: "node_modules/bootstrap/dist/js/bootstrap.min.js",
            dest: 'libs/bootstrap.js'
        },
        bootstrap_css: {
            nonull: true,
            src: "node_modules/bootstrap/dist/css/bootstrap.min.css",
            dest: "libs/bootstrap.css"
        },
        nprogress_js: {
            nonull: true,
            src: "node_modules/nprogress/nprogress.js",
            dest: "libs/nprogress.js"
        },
        nprogress_css: {
            nonull: true,
            src: "node_modules/nprogress/nprogress.css",
            dest: "libs/nprogress.css"
        },
        requirejs: {
            nonull: true,
            src: "node_modules/requirejs/require.js",
            dest: "libs/require.js"
        },
        domready: {
            nonull: true,
            src: "node_modules/domReady/domReady.js",
            dest: "libs/domready.js"
        },
        text: {
            nonull: true,
            src: "node_modules/text/text.js",
            dest: "libs/text.js"
        },
        i18n: {
            nonull: true,
            src: "node_modules/i18n/i18n.js",
            dest: "libs/i18n.js"
        },
        underscore: {
            nonull: true,
            src: "node_modules/underscore/underscore-min.js",
            dest: "libs/underscore.js"
        },
        jqwidgets_js: {
            nonull: true,
            src: "node_modules/jqwidgets/jqx-all.js",
            dest: "libs/jqwidgets.js"
        },
        jqwidgets_css: {
            nonull: true,
            src: "node_modules/jqwidgets/styles/jqx.base.css",
            dest: "libs/jqwidegts.css"
        },
        handlebars: {
            nonull: true,
            src: "node_modules/handlebars/dist/handlebars.min.js",
            dest: "libs/handlebars.js"
        },
        jstree: {
            nonull: true,
            expand: true,
            //flatten: true,
            cwd: "node_modules/jstree/dist/",
            src: '**',
            dest: "libs/jstree/"
        }
	},
	concat: {
		options: {
			banner: '<%= meta.banner %>',
			separator: ';\n',
			stripBanners: {
				block: true
			}
		},
		jquery_plugins: {
			src: [
				'node_modules/jquery/dist/jquery.min.js',
				'node_modules/hoverintent/dist/hoverintent.min.js',
				'node_modules/jquery-powertip/dist/jquery.powertip.min.js',
				'node_modules/csvjson/csvjson.min.js',
				//TODO https://github.com/aaronsnoswell/csvjson.js
				//TODO https://github.com/stefanocudini/csvjson.js
				'libs/jquery.i18n.properties-min.js',
				'libs/jquery-ui.custom.min.js'
			],
			dest: 'dist/jquery_plugins.min.js'
		}
	},
	cssmin: {
		options: {
			banner: '<%= meta.banner %>'
		},
		combine: {
			src: [
				'css/fenix-ui-leaflet.css',
				'css/fenix-ui-map.css'				
			],
			dest: 'dist/fenix-ui-map.min.css'
		},
		minify: {
			expand: true,
			cwd: 'dist/',
			src: '<%= cssmin.combine.dest %>'
		}
	}
});

//TODO add rev plugin

grunt.registerTask('default', [
	'clean',
	'copy',
	'concat',
	'cssmin'
]);

};