const { input, execSync } = require('../../hook')
const pkg = require('../../../package.json')

module.exports = async function () {

	try {
		const { newBranch } = await input([{
			type: 'input',
			name: 'newBranch',
			message: 'Switched to a new branch',
			default: pkg.version
		}])

		const tmp_newBranch = newBranch
		execSync(`git checkout -b ${tmp_newBranch}`)
	} catch (error) {
		console.log('Error: Cannot switch to new branch')
	}
}