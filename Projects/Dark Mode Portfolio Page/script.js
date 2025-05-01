let icon = document.getElementById("icon");
let body = document.body;

function toggle() {
  if (body.style.background == "black") {
    body.style.background = "white";
    icon.src = "images/sun.png";
  } else {
    body.style.background = "black";
    icon.src = "images/moon.png";
  }
}
