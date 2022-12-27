#!/usr/bin/env node
const program = require('commander')
const { select, input, execSync } = require('../src/hook')
const { commitMessage } = require('../src/action')
const pkg = require('../package.json')

program.version(pkg.version)

program
	.name('igit')
	// .command('igit <action>')
	.option('-c, --commit', 'Add Commit')
	// .option('-g, --git [type]', 'Add [marble]', 'Angie')
	.action(function (action, cmd) {
		// console.log({ action })
		if (action.commit) {
			commitMessage()
		}
	})


// program.parse(process.argv)
program.parse()
