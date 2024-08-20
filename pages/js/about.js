var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");

document.querySelector("#a").addEventListener("click", function () {
  if (one.style.display === "none" || one.style.display === "") {
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
  } else {
    one.style.display = "none";
  }
});
document.querySelector("#b").addEventListener("click", function () {
  if (two.style.display === "none" || two.style.display === "") {
    one.style.display = "none";
    two.style.display = "block";
    three.style.display = "none";
    four.style.display = "none";
  } else {
    two.style.display = "none";
  }
});
document.querySelector("#c").addEventListener("click", function () {
  if (three.style.display === "none" || three.style.display === "") {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "block";
    four.style.display = "none";
  } else {
    three.style.display = "none";
  }
});
document.querySelector("#d").addEventListener("click", function () {
  if (four.style.display === "none" || four.style.display === "") {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "block";
  } else {
    four.style.display = "none";
  }
});
