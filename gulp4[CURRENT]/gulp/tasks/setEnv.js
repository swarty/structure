import config from '../config'

export function setDev(cb) {
	config.setEnv('development');
	config.logEnv();
	cb();
}

export function setProd(cb) {
	config.setEnv('production');
	config.logEnv();
	cb();
}