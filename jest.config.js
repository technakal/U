module.exports = async () => ({
	verbose: true,
	transform: { '^.+\\.js?$': 'babel-jest' },
	coverageReporters: ['json-summary', 'text', 'lcov']
});
