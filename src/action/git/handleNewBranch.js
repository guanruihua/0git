const { input, execSync } = require('../../hook')
const pkg = require('../../../package.json')

module.exports = async function () {

	try {
		const { newBranch } = await input([{
			type: 'input',
			name: 'newBranch',
			message: 'Switched to a new branch',
			default: 'v' + pkg.version
		}])

		const tmp_newBranch = newBranch
		console.log(execSync(`git checkout -b ${tmp_newBranch}`).toString())
	} catch (error) {
		console.log('Error: Cannot switch to new branch')
	}
}