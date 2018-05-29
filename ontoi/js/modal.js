// Get the modal
var modal1 = document.getElementById('myModalFM');
// Get the button that opens the modal
var btn1 = document.getElementById("FM");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
 	
// Get the modal
var modal2 = document.getElementById('myModalAB');
// Get the button that opens the modal
var btn2 = document.getElementById("AB");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// Get the modal
var modal3 = document.getElementById('myModalLC');
// Get the button that opens the modal
var btn3 = document.getElementById("LC");
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];
// When the user clicks the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

function mensaje1(){
alert('Campus Fernando May');
}
