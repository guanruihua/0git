const fs = require('fs')
const { toArray, isDir } = require('./util')

function write(path, index = 0, lv = 0) {
	const indexSpaces = new Array(index).fill('  ').join('')
	const dirs = toArray(fs.readdirSync(path, 'utf-8'))
		.map(item => {
			if (index === 0 && lv === 0) {
				try {
					const _path = path + item + '/index.html'
					fs.copyFile('./config/README.md', path + item + '/README.md', (err) => {
						err && console.log(err)
					});
					fs.copyFile('./config/index.html', _path, (err) => {
						err && console.log(err)
					})

					fs.writeFileSync(
						`./${item}/_sidebar.md`,
						write(path + item, 0, 1)
							.replaceAll(`](${item}/`, '](')
					)
				} catch (error) {
					console.error(error)
				}
				return
			}
			const newPath = path + '/' + item
			const _newPath = newPath.replace('./', '')
			const newDirs = toArray(fs.readdirSync(path, 'utf-8'))
			const nextLvHasIndexMd = newDirs.includes('index.md')
			let content = item

			if (nextLvHasIndexMd) {
				// content = `[${item}](${_newPath}/index.md)`
			}
			// 判断下级时候有index.md 文件
			if (item.indexOf('index.md') > -1) {
				// console.log(newPath, item)
				// return
			}

			if (content.indexOf('.md') > -1 && !nextLvHasIndexMd) {
				content = `[${content.replace('.md', '')}](${_newPath})`
			}

			const nextContent = isDir(newPath) ? write(newPath, index + 1) : ''
			return `${indexSpaces}* ${content}\n${nextContent}`
		})

	return dirs.join('')
}

write('./', 0)