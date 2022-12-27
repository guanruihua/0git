const { input, execSync } = require('../../hook')
const timeString = new Date().toDateString()

module.exports = async function handleCommit() {
	const commitMessage = await input([{
		type: 'input',
		name: 'commitMessage',
		message: 'Add Commit Message'
	}])

	try {
		execSync('git add .')
		const myCommand = `git commit -m  "${commitMessage || ("test: " + timeString)}"`
		console.log('Command:' + myCommand)
		console.log(execSync(myCommand).toString())

	} catch (error) {
		console.log('Commit Message Error')
	}
}