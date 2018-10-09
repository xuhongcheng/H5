exports.install = function(Vue,options){

	Vue.prototype.Tip=function(keywords){//totast
		let dom=document.createElement("div");
		dom.className='globalTip';
		dom.innerHTML=keywords
		document.querySelector('body').appendChild(dom)
		setTimeout(function(){
			// dom.style.display='none'
			dom.className='tipHide'
			dom.parentNode.removeChild(dom);
		},1500)
	}
}