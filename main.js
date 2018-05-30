var modal = document.getElementById("Modal");

var img = document.getElementById(this);
var modalimg = document.getElementById("img");

function openImg(theimg) {
	modal.style.display = "block";
	modalimg.src = theimg.src;
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
	modal.style.display = "none";
}