//your JS code here. If required.
let modal = document.getElementsByClassName('modal')[0];
let openBtn = document.getElementById('openModal');
let closeBtn = document.getElementsByClassName('close-modal')[0];

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