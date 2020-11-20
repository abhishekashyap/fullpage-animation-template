// TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullPage", {
  autoScrolling: true,
  navigation: true,
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
});

document.addEventListener("DOMContentLoaded", function () {
  const div1 = document.getElementById("switch-1");
  const div2 = document.getElementById("switch-2");

  div2.style.display = "none";

  const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");

  // Toggle btn
  btn1.addEventListener("click", function () {
    div1.style.display = "block";
    div2.style.display = "none";
  });

  btn2.addEventListener("click", function () {
    div1.style.display = "none";
    div2.style.display = "block";
  });
});
