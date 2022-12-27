const { input, execSync } = require('../hook')

module.exports = async function (defaultCommitMessage = '') {
	const commitMessage = await input([{
		type: 'input',
		name: 'commitMessage',
		message: 'Commit Message'
	}]) || defaultCommitMessage

	try {
		execSync('git add .')
		const myCommand = `git commit -m  "${commitMessage}"`
		console.log('Command:', myCommand)
		console.log(execSync(myCommand).toString()
		)
	} catch (error) {
		console.log('Commit Message Error')
	}
}