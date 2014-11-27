'use strict';

module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-jsonlint');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
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
	jsonlint: {
		sample: {
			src: [ 'i18n/*.json' ]
		}
	},
	copy: {
        jquery: {
            nonull: true,
            src: 'node_modules/jquery/dist/jquery.min.js',
            dest: 'src/lib/jquery.js'
        },
        backbone: {
            nonull: true,
            src: 'node_modules/backbone/backbone-min.js',
            dest: 'src/lib/backbone.js'
        },
        "backbone.layoutmanager": {
            nonull: true,
            src: "node_modules/backbone.layoutmanager/backbone.layoutmanager.js",
            dest: "src/lib/backbone.layoutmanager.js"
        },
        bootstrap_js: {
            nonull: true,
            src: "node_modules/bootstrap/dist/js/bootstrap.min.js",
            dest: 'src/lib/bootstrap.js'
        },
        bootstrap_css: {
            nonull: true,
            src: "node_modules/bootstrap/dist/css/bootstrap.min.css",
            dest: "src/lib/bootstrap.css"
        },
        nprogress_js: {
            nonull: true,
            src: "node_modules/nprogress/nprogress.js",
            dest: "src/lib/nprogress.js"
        },
        nprogress_css: {
            nonull: true,
            src: "node_modules/nprogress/nprogress.css",
            dest: "src/lib/nprogress.css"
        },
        requirejs: {
            nonull: true,
            src: "node_modules/requirejs/require.js",
            dest: "src/lib/require.js"
        },
        domready: {
            nonull: true,
            src: "node_modules/domReady/domReady.js",
            dest: "src/lib/domready.js"
        },
        text: {
            nonull: true,
            src: "node_modules/text/text.js",
            dest: "src/lib/text.js"
        },
        i18n: {
            nonull: true,
            src: "node_modules/i18n/i18n.js",
            dest: "src/lib/i18n.js"
        },
        underscore: {
            nonull: true,
            src: "node_modules/underscore/underscore-min.js",
            dest: "src/lib/underscore.js"
        },
        jqwidgets_js: {
            nonull: true,
            src: "node_modules/jqwidgets/jqx-all.js",
            dest: "src/lib/jqwidgets.js"
        },
        jqwidgets_css: {
            nonull: true,
            src: "node_modules/jqwidgets/styles/jqx.base.css",
            dest: "src/lib/jqwidegts.css"
        },
        handlebars: {
            nonull: true,
            src: "node_modules/handlebars/dist/handlebars.min.js",
            dest: "src/lib/handlebars.js"
        },
        jstree: {
            nonull: true,
            expand: true,
            //flatten: true,
            cwd: "node_modules/jstree/dist/",
            src: '**',
            dest: "src/lib/jstree/"
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
				'node_modules/leaflet/dist/leaflet.js',
				'node_modules/leaflet.markercluster/dist/leaflet.markercluster.js',
				'node_modules/jquery-powertip/dist/jquery.powertip.min.js',
				//TODO https://github.com/stevenbenner/jquery-powertip
				//TODO https://github.com/stefanocudini/jquery-powertip
				'node_modules/csvjson/csvjson.min.js',
				//TODO https://github.com/aaronsnoswell/csvjson.js
				//TODO https://github.com/stefanocudini/csvjson.js
				'lib/jquery.i18n.properties-min.js',
				'lib/jquery-ui.custom.min.js'
			],
			dest: 'dist/fenix-ui-libs/jquery_plugins.min.js'
		},
        jquery_plugins_src: {
            src: [
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/hoverintent/dist/hoverintent.min.js',
                'node_modules/leaflet/dist/leaflet.js',
                'node_modules/leaflet.markercluster/dist/leaflet.markercluster.js',
                'node_modules/jquery-powertip/dist/jquery.powertip.min.js',
                //TODO https://github.com/stevenbenner/jquery-powertip
                //TODO https://github.com/stefanocudini/jquery-powertip
                'node_modules/csvjson/csvjson.min.js',
                //TODO https://github.com/aaronsnoswell/csvjson.js
                //TODO https://github.com/stefanocudini/csvjson.js
                'lib/jquery.i18n.properties-min.js',
                'lib/jquery-ui.custom.min.js'
            ],
            dest: 'dist/fenix-ui-libs/jquery_plugins.js'
        }
	},
	cssmin: {
		options: {
			banner: '<%= meta.banner %>'
		},
		combine: {
			src: [
				'src/css/fenix-ui-leaflet.css',
				'src/css/fenix-ui-map.css'				
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

grunt.registerTask('default', [
	//'jshint',
	'clean',
	'concat:jquery_plugins',
	'cssmin',
	'copy'
]);

};