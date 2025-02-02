document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "yes.html";  
});

var noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("touchstart", moveButton);


function moveButton() {
    var maxX = window.innerWidth - noButton.clientWidth;
    var maxY = window.innerHeight - noButton.clientHeight;
    
    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;
    
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}
