const jsModules = [
	[
		"module-resolver",
		{
			"alias": {
				"src": "./src",
				"styles": "./src/assets/styles",
				"images": "./src/assets/images",
				"videos": "./src/assets/videos",
				"scripts": "./src/assets/scripts"
			}
		}
	]
]

const babelOptions = (ts) => {
	const opts = { 
		presets: [
			'@babel/preset-env'
		],
		plugins: [
			...jsModules
		]
	};

	if(ts) opts.presets.push('@babel/preset-typescript');
	if(!ts) opts.plugins.push('@babel/plugin-transform-regenerator');

	return opts;
}


module.exports = babelOptions;