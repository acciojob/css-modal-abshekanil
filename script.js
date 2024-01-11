//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(){
	

let modal = document.querySelector('.modal');
let openBtn = document.getElementById('openModal');
let closeBtn = document.querySelector('.close-modal');

openBtn.onclick = function(){
	modal.style.display = "block";
}

closeBtn.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal)
	{
		modal.style.display = "none";
	}
}

	});