import config from '../config'

export function setDev(done) {
	config.setEnv('development');
	config.logEnv();
	done();
}

export function setProd(done) {
	config.setEnv('production');
	config.logEnv();
	done();
}