const { input, execSync } = require('../../hook')
const pkg = require('../../../package.json')

module.exports = async function () {
	const newBranch = await input([{
		type: 'input',
		name: 'newBranch',
		message: 'Switched to a new branch (default version)'
	}])

	const tmp_newBranch = newBranch || pkg.version

	try {
		console.log(execSync(`git checkout -b ${tmp_newBranch}`).toString())
	} catch (error) {
		console.log('Error: Cannot switch to new branch')
	}
}