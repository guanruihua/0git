const modulesDom = document.querySelector('.modules-content')

function buildModulesDom(dom) {
	modules.forEach(name => {
		const itemDom = document.createElement('div')
		itemDom.setAttribute('title', name)
		// const imgDom = document.createElement('img')
		// imgDom.setAttribute('src', `./${name}/index.jpg`)
		// imgDom.setAttribute('title', name)
		// imgDom.onerror = function () {
		// 	this.src = './__assets__/001.jpg'
		// }
		// imgDom.setAttribute('alt', 'logo')
		const itemTitle = document.createElement('h3')
		itemTitle.innerHTML = name
		// itemDom.appendChild(imgDom)
		itemDom.appendChild(itemTitle)
		itemDom.onclick = () => {
			window.location.href = '/' + name + '/index.html'
		}
		dom.appendChild(itemDom)
	})
}

buildModulesDom(modulesDom)
