	var cat = document.getElementById('myIml');
var angle = 0, lastTime = null;
function animate(time) {
if (lastTime != null)
angle += (time - lastTime) * 0.001;
lastTime = time;
cat.style.top = (Math.sin(angle) * 100) + "px";
cat.style.left = (Math.cos(angle) * 200) + "px";
requestAnimationFrame(animate);
}


var button = document.querySelector("button");
button.addEventListener("click", function() {
alert("Маловато будет!");
});

document.getElementById('myIml').onclick = myFunction;

function myFunction() {
  alert('Ouch!!!');
}


requestAnimationFrame(animate);
