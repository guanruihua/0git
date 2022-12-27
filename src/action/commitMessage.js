const { input, execSync } = require('../hook')

module.exports = async function () {
	const commitMessage = await input([{
		type: 'input',
		name: 'commitMessage',
		message: ' Commit Message'
	}])

	console.log([
		execSync('git add .'),
		execSync(`git commit -m  "${commitMessage}"`),
	].map(i => i.toString()).join('\n'))
}