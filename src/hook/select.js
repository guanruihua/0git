const { Select } = require('enquirer')

module.exports = function select(options = {}) {
	return new Select(options).run()
}