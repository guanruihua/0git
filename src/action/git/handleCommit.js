const { input, execSync } = require('../../hook')
const timeString = new Date().toDateString()

module.exports = async function handleCommit() {

	try {
		const { commitMessage } = await input([{
			type: 'input',
			name: 'commitMessage',
			message: 'Add Commit Message',
			default: ("test: " + timeString)
		}])
		execSync('git add .')
		const myCommand = `git commit -m  "${commitMessage}"`
		console.log('Command:' + myCommand)
		console.log(execSync(myCommand).toString())

	} catch (error) {
		console.log('Commit Message Error')
	}
}