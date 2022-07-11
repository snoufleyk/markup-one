import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder   = './src';

export const path = {
	build      : {
		files : `${buildFolder}/files/`,
		html  : `${buildFolder}/`,
		css   : `${buildFolder}/css/`,
		js    : `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts : `${buildFolder}/fonts/`,
	},
	src        : {
		files : `${srcFolder}/files/**/*.*`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg   : `${srcFolder}/img/**/*.svg`,
		html  : `${srcFolder}/*.pug`,
		scss  : `${srcFolder}/scss/main.sass`,
		js    : `${srcFolder}/js/app.js`,
		svgicons: `${srcFolder}/svgicons/*.svg`
	},
	watch      : {
		files : `${srcFolder}/files/**/*.*`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		html  : `${srcFolder}/**/*.pug`,
		scss  : `${srcFolder}/scss/**/*`, // sass
		js    : `${srcFolder}/**/*.js`,
	},
	clean      : buildFolder,
	buildFolder: buildFolder,
	srcFolder  : srcFolder,
	rootFolder : rootFolder,
	ftp        : ''
}