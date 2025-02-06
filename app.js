document.addEventListener("scroll", function () {
    let scrollPoint = 200;  
    let bg = document.querySelector(".bgimage");
  
    if (window.scrollY > scrollPoint) {
      bg.classList.add("active");
    } else {
      bg.classList.remove("active");
    }
  });