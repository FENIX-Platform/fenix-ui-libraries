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
/*        ,jqueryui: {
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
//			separator: ';\n',
			stripBanners: {
				block: true
			}
		},
		requirejs: {
			src: [
				"node_modules/requirejs/require.js",
//				"node_modules/domReady/domReady.js",
//				"node_modules/text/text.js",
//				"node_modules/i18n/i18n.js"
			],
			dest: 'dist/requirejs.min.js'
		},
		jquery: {
			src: [
				"node_modules/jquery-1.10.2/jquery-1.10.2.min.js",
                "node_modules/jquery-ui-1.10.3/jquery-ui-1.10.3.custom.min.js",
                "node_modules/jquery.chromatable/jquery.chromatable.js",
                "node_modules/jquery-mousewheel/jquery.mousewheel.js",
                "node_modules/jquery.fancybox/source/jquery.fancybox.pack.js",
                "node_modules/historyjs/scripts/bundled/html4+html5/jquery.history.js",
//				"node_modules/hoverintent/dist/hoverintent.min.js",
				"node_modules/jquery-powertip/dist/jquery.powertip.min.js",
                "node_modules/jquery.i18n.properties/jquery.i18n.properties-min.js",
                "node_modules/jquery.stickyjs/jquery.sticky.js",
                "node_modules/scrollup/dist/jquery.scrollUp.min.js",
                "node_modules/jquery.scrollpane/jquery.jscrollpane.min.js",
                "node_modules/jquery.rangeslider/jQRangeSlider-min.js"
			],
			dest: 'dist/jquery.min.js'
		},
		jqwidgets: {
			src: [
                'node_modules/jqwidgets-2.8.3/jqxcore.js',
                'node_modules/jqwidgets-2.8.3/jqxtabs.js',
                'node_modules/jqwidgets-2.8.3/jqxscrollbar.js',
                'node_modules/jqwidgets-2.8.3/jqxpanel.js',
                'node_modules/jqwidgets-2.8.3/jqxtree.js',
                'node_modules/jqwidgets-2.8.3/jqxexpander.js',
                'node_modules/jqwidgets-2.8.3/jqxbuttons.js',
                'node_modules/jqwidgets-2.8.3/jqxlistbox.js',
                'node_modules/jqwidgets-2.8.3/jqxdropdownlist.js',
                'node_modules/jqwidgets-2.8.3/jqxcombobox.js',
                'node_modules/jqwidgets-2.8.3/jqxcheckbox.js',
                'node_modules/jqwidgets-2.8.3/jqxdata.js',
                'node_modules/jqwidgets-2.8.3/jqxradiobutton.js',
                'node_modules/jqwidgets-2.8.3/jqxnumberinput.js',
                'node_modules/jqwidgets-2.8.3/jqxgrid.js',
                'node_modules/jqwidgets-2.8.3/jqxmenu.js',
                'node_modules/jqwidgets-2.8.3/jqxgrid.filter.js',
                'node_modules/jqwidgets-2.8.3/jqxgrid.grouping.js',
                'node_modules/jqwidgets-2.8.3/jqxgrid.columnsresize.js',
                'node_modules/jqwidgets-2.8.3/jqxgrid.sort.js',
                'node_modules/jqwidgets-2.8.3/jqxgrid.selection.js',
                'node_modules/jqwidgets-2.8.3/jqxgrid.export.js',
                'node_modules/jqwidgets-2.8.3/jqxdata.expor.js',
			],
			dest: 'dist/jqwidgets/jqwidgets.min.js'
		}
	},
	cssmin: {
		jquery: {
			src: [
//				"node_modules/jquery.fancybox/source/helpers/jquery.fancybox-thumbs.css",
//				"node_modules/jquery.fancybox/source/helpers/jquery.fancybox-buttons.css",
//				"node_modules/jquery.fancybox/source/jquery.fancybox.css",

				//TODO restyle faostat3 pages with 1.10.3
				"node_modules/jquery-ui-1.9.2/smoothness/jquery-ui.custom.min.css",
                "node_modules/jquery.scrollpane/jquery.jscrollpane.css",
                "node_modules/scrollup/demo/css/themes/pill.css"

			],
			dest: 'dist/jquery.min.css'
		},
		jqwidgets: {
			src: [
				"node_modules/jqwidgets-2.8.3/styles/jqx.base.css"
			],
			dest: 'dist/jqwidgets/styles/jqwidgets.min.css'
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