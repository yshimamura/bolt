var elem_1 = document.getElementById("button__area");
var elem_2 = document.getElementById("button__view");
var elem_3 = document.getElementById("button__hidden");
function toggle__view() {
  elem_1.style.display = "";
  elem_2.style.display = "none";
  elem_3.style.display = "";
}
function toggle__hidden() {
  elem_1.style.display = "none";
  elem_2.style.display = "";
  elem_3.style.display = "none";
}