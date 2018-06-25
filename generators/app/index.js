'use strict';
const Generator = require('yeoman-generator');
const replace = require('replace');
const mkdirp = require('mkdirp');

const tplPath = [
	{ src: '%NAME_MODULE%', type: 'folder' },
	{ src: '%NAME_MODULE%/actions', type: 'folder' },
	{ src: '%NAME_MODULE%/actions/%FILE_NAME%.js', type: 'file' },
	{ src: '%NAME_MODULE%/containers', type: 'folder' },
	{ src: '%NAME_MODULE%/containers/%FILE_NAME%.jsx', type: 'file' },
	{ src: '%NAME_MODULE%/reducers', type: 'folder' },
	{ src: '%NAME_MODULE%/reducers/%FILE_NAME%.js', type: 'file' },
	{ src: '%NAME_MODULE%/reducers/index.js', type: 'file' },
	{ src: '%NAME_MODULE%/requests', type: 'folder' },
	{ src: '%NAME_MODULE%/requests/%FILE_NAME%.js', type: 'file' },
	{ src: '%NAME_MODULE%/constants.js', type: 'file' },
	{ src: '%NAME_MODULE%/index.js', type: 'file' },
	{ src: '%NAME_MODULE%/routes.js', type: 'file' }
];

const transformName = {
	apiRoot: {
		search: '%API_ROOT%',
		replace: (name) => name.toLowerCase(),
		key: 'url'
	},
	fileName: {
		search: '%FILE_NAME%',
		replace: (name) => name.charAt(0).toUpperCase() + name.toLowerCase().slice(1),
		key: 'model'
	},
	kamelName: {
		search: '%KAMEL_NAME%',
		replace: (name) => name.charAt(0).toUpperCase() + name.toLowerCase().slice(1),
		key: 'model'
	},
	lowerName: {
		search: '%LOWER_NAME%',
		replace: (name) => name.toLowerCase(),
		key: 'model'
	},
	upperName: {
		search: '%UPPER_NAME%',
		replace: (name) => name.toUpperCase(),
		key: 'model'
	}
};

class Tictales extends Generator {
	prompting() {
		const prompts = [
			{ type: 'input', name: 'module', message: 'Le nom du module :', default: 'nouveauModule' },
			{ type: 'input', name: 'model', message: 'La nom du model :', default: 'modelName' },
			{ type: 'input', name: 'url', message: "La racine de l'url API:", default: 'modulePath' }
		];

		return this.prompt(prompts).then((props) => {
			this.props = props;
		});
	}

	writing() {
		for (let path of tplPath) {
			let newPath = path.src
				.replace('%NAME_MODULE%', this.props.module)
				.replace('%FILE_NAME%', transformName.fileName.replace(this.props[transformName.fileName.key]));
			if (path.type === 'folder') {
				mkdirp(newPath);
			} else {
				this.fs.copyTpl(this.templatePath(path.src), this.destinationPath(newPath), {});
			}
		}
	}

	install() {
		for (let transForm in transformName) {
			const transFormCurrent = transformName[transForm];
			const oOpt = {
				regex: transFormCurrent.search,
				replacement: transFormCurrent.replace(this.props[transFormCurrent.key]),
				recursive: true,
				paths: [ this.destinationRoot() + '/.' ]
			};

			replace(oOpt);
		}
	}
}

module.exports = Tictales;
