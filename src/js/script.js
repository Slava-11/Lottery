const boxes = document.querySelectorAll(".box__card");
let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("box__card--clicked")) {
      return;
    }
    box.classList.add("box__card--clicked");

    count++;

    const imgCheck = box.querySelector(".box__card-img-check");
    const imgClose = box.querySelector(".box__card-img-close");
    const winSection = document.querySelector(".win");
    function addActiveClass() {
      const body = document.querySelector("body");
      body.classList.add("active");
    }

    if (count === 3) {
      imgClose.style.opacity = "0";
      imgCheck.style.opacity = "1";
      addActiveClass();
      winSection.style.display = "block";
    } else if (count === 2 || count === 1) {
      imgClose.style.transition = ".5s";
      imgClose.style.opacity = "1";
      imgCheck.style.opacity = "0";
    }
  });
});
