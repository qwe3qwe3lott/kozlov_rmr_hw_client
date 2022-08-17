/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			isolatedModules: true
		}
	},
	moduleNameMapper: {
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
	}
};