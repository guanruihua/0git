const { input, execSync } = require('../hook')
const timeString = new Date().toDateString()

module.exports = async function () {
	const defaultCommitMessage = timeString || ''
	const commitMessage = await input([{
		type: 'input',
		name: 'commitMessage',
		message: 'Commit Message'
	}]) || defaultCommitMessage

	try {
		execSync('git add .')
		const myCommand = `git commit -m  "${commitMessage}"`
		console.log('Command:'+ timeString)
		console.log(execSync(myCommand).toString()
		)
	} catch (error) {
		console.log('Commit Message Error')
	}
}