document.addEventListener("scroll", function () {
  let scrollPoint = 200;
  let bg = document.querySelector(".bgimage");
  let firstcontent = document.getElementById("firstcontent");
  let secondcontent = document.getElementById("secondcontent");

  if (window.scrollY > scrollPoint) {
    bg.classList.add("active");
    firstcontent.classList.add("active");
    secondcontent.classList.add("active");
  } else {
    bg.classList.remove("active");
    firstcontent.classList.remove("active");
    secondcontent.classList.remove("active");
  }
});
 

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalBio = document.getElementById("modal-bio");
const closeModal = document.getElementById("close-modal");

document.querySelectorAll(".author-card").forEach(card => {
  card.addEventListener("click", function () {
    const imgSrc = this.getAttribute("data-img");
    const name = this.getAttribute("data-name");
    const bio = this.getAttribute("data-bio");

    modalImg.src = imgSrc;
    modalImg.alt = name;
    modalTitle.textContent = name;
    
    modalBio.innerHTML = bio;

    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});