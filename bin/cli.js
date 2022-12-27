#!/usr/bin/env node
const { select, input, execSync } = require('../src/hook')
const { commitMessage } = require('../src/action')
// const data = execSync('git status')
// const data = execSync('git status')

// console.log(data.toString())



async function action() {

	await commitMessage()
	// 	const color = await select({
	// 		name: 'color',
	// 		message: 'Pick a flavor',
	// 		choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
	// 	})

	// 	console.log(name, color);

	// 	// process.exit(0)
}

action()
