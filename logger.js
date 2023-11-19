const getLogger = () => {
	let pre = document.querySelector('pre.debug')
	if(pre) return pre

	pre = document.createElement('pre')
	pre.classList.add('debug')
	pre.textContent = ''
	pre.style.position = 'absolute'
	pre.style.bottom = '5rem'
	pre.style.backgroundColor = 'black'
	pre.style.color = 'yellow'
	pre.style.border = '0.125rem solid white' 
	document.body.appendChild(pre)
	return pre
}

const log = ( msg = '', jsonSpacing = -1, append = 0 ) => {
	const target = getLogger()
	if(jsonSpacing > -1){
		msg = JSON.stringify(msg, null, jsonSpacing)
	} else if( typeof msg === 'object' ) { // force stringification of objects
		msg = JSON.stringify(msg)
	} else{
		msg = msg.trim()
	}

	if(append === 0 ){
		target.textContent = msg
		return null
	}

	let entries = target.textContent.split(/\n/)
	
	if(append === 1){
		entries = entries.slice(-5)
		entries.push(msg)
	} else {
		entries = entries.slice(0, 5)
		entries.unshift(msg)
	} 

	target.textContent = entries.join('\n')
}