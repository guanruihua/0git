const { input, execSync } = require('../hook')

module.exports = async function (defaultCommitMessage = '') {
	const commitMessage = await input([{
		type: 'input',
		name: 'commitMessage',
		message: 'Commit Message'
	}]) || defaultCommitMessage

	try {
		execSync('git add .')

		console.log(
			execSync(`git commit -m  "${commitMessage}"`)
				.toString()
		)
	} catch (error) {
		console.log('Commit Message Error')
	}
}