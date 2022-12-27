const { prompt } = require('enquirer')

// const commitMessage = await input([{
// 	type: 'input',
// 	name: 'commitMessage',
// 	message: 'Commit Message'
// }])

module.exports = function input(options = []) {
	return prompt(options)
}