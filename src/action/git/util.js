const { execSync } = require('../../hook')

module.exports.getGitHash = function () {
	return execSync('git rev-parse --short HEAD', { logCommand: false, logResult: false }).toString()

}

module.exports.getGitBranch = function () {
	return execSync('git rev-parse --abbrev-ref HEAD', { logCommand: false, logResult: false }).toString()
}