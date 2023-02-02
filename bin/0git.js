#!/usr/bin/env node
const program = require('commander')
const { actionGit } = require('../src/action')
const pkg = require('../package.json')

program.version(pkg.version)

program
	.name('0git')
	.option('-c, --commit', 'Add Commit Message')
	.option('-p, --push', 'Push modification to Repositories')
	.option('-b, --branch', 'Switched to a new branch')
	.option('-t, --tag', 'Added a new Tag')
	.action((action) => actionGit(action))

program.parse()
