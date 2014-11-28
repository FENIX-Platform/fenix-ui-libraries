'use strict';

module.exports = function(grunt) {

//grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-rev');

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
        jqwidgets: {
            nonull: true,
            expand: true,
            //flatten: true,
            cwd: "node_modules/jqwidgets-2.8.3",
            src: ['resources/**','styles/**'],
            dest: "dist/jqwidgets/"
        }
/*        jstree: {
            nonull: true,
            expand: true,
            //flatten: true,
            cwd: "node_modules/jstree/dist/",
            src: '**',
            dest: "src/jstree/"
        }*/
	},
	concat: {
		options: {
			banner: '<%= meta.banner %>',
			separator: ';\n',
			stripBanners: {
				block: true
			}
		},
		requirejs: {
			src: [
				"node_modules/requirejs/require.js",
				"node_modules/domReady/domReady.js",
				"node_modules/text/text.js",
				"node_modules/i18n/i18n.js",
			],
			dest: 'dist/requirejs.min.js'
		},
		jquery: {
			src: [
				"node_modules/jquery/dist/jquery.min.js",
				"node_modules/hoverintent/dist/hoverintent.min.js",
				"node_modules/powertip/dist/jquery.powertip.min.js",
				"node_modules/jquery.i18n.properties-min.js",
				"node_modules/jquery-ui-1.10.3/jquery-ui-1.10.3.custom.min.js",
				"node_modules/jquery.fancybox/source/jquery.fancybox.pack.js",
				"node_modules/underscore/underscore-min.js",
				"node_modules/csvjson/csvjson.min.js"
				//"node_modules/nprogress/nprogress.js"
				//TODO 1.0/jquery.jscrollpane.css
			],
			dest: 'dist/jquery.min.js'
		},
		jqwidgets: {
			src: [
				"node_modules/jqwidgets-2.8.3/jqx-all.js"
			],
			dest: 'dist/jqwidgets/jqwidgets.min.js'
		}
	},
	cssmin: {
		jquery: {
			src: [
				"node_modules/bootstrap/dist/css/bootstrap.min.css",
				"node_modules/jquery.fancybox/source/helpers/jquery.fancybox-thumbs.css",
				"node_modules/jquery.fancybox/source/helpers/jquery.fancybox-buttons.css",
				"node_modules/jquery.fancybox/source/jquery.fancybox.css",
				//"node_modules/nprogress/nprogress.css",
				"node_modules/nprogress/nprogress.css",

				//TODO restyle faostat3 pages with 1.10.3
				"node_modules/jquery-ui-1.9.2/smoothness/jquery-ui.custom.min.css"
			],
			dest: 'dist/jquery.min.css'
		},
		jqwidgets: {
			src: [
				"node_modules/jqwidgets-2.8.3/styles/jqx.base.css"
			],
			dest: 'dist/jqwidgets/jqwidgets.min.css'
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