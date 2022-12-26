const { prompt } = require('enquirer')

module.exports = function input(options = []) {
	return prompt(options)
}