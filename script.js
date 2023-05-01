// window.addEventListener("scroll", () => {
//   let nav_bar = document.getElementById("nav_bar");

//   if (window.pageYOffset >= 186) {
//     nav_bar.classList.add("sticky");
//   } else {
//     nav_bar.classList.remove("sticky");
//   }
// });

window.addEventListener("scroll", () => {
  let nav_bar = document.getElementById("nav_bar");
  if (window.pageYOffset >= 186) {
    nav_bar.classList.add("sticky");
  } else {
    nav_bar.classList.remove("sticky");
  }
});
