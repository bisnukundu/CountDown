const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const minn = document.querySelector(".min")
const secc = document.querySelector(".sec")
const milii = document.querySelector(".mili")
var min = 1
let sec = 60
let mili = 60
//START 
function test(){
	let sett = setInterval(function(){
		milii.innerText = `: ${mili--}`
		if(mili < 0){
			mili = 60
			secc.innerText = `${sec--}`
		}
		if(sec< 0){
			sec = 60
			minn.innerText = `${min--} :`
		}
		if(min<0){
				clearInterval(sett);
			}
	},0.001)
}

start.addEventListener("click",test)

