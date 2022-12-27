const { execSync } = require('../../hook')

module.exports.getGitHash = function () {
	return execSync('git rev-parse --short HEAD').toString()

}

module.exports.getGitBranch = function () {
	return execSync('git rev-parse --abbrev-ref HEAD').toString()
}