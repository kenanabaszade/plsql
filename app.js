document.addEventListener("scroll", function () {
    let scrollPoint = 200;  
    let bg = document.querySelector(".bgimage");
  
    if (window.scrollY > scrollPoint) {
      bg.classList.add("active");
    } else {
      bg.classList.remove("active");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".author-card2").forEach(card => {
      const expandButton = card.querySelector(".expand");
      const hideableContent = card.querySelector(".hideablecontent");
  
      expandButton.addEventListener("click", function () {
        hideableContent.classList.toggle("expanded");
        expandButton.classList.toggle("expanded");
      });
    });
  });
  