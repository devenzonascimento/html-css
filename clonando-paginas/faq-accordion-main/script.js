const plusButtons = document.querySelectorAll(".plus");

plusButtons.forEach(button => {
  button.addEventListener("click", () => {
    const container = button.closest('.mini-container');
    const paragraphs = container.querySelectorAll('p');

    button.classList.toggle("active");
    paragraphs.forEach(paragraph => {
      if (button.classList.contains("active")) {
        paragraph.style.maxHeight = "100px";
        paragraph.style.opacity = "1";
        button.setAttribute("src", "assets/images/icon-minus.svg")
      } else {
        paragraph.style.maxHeight = "0";
        paragraph.style.opacity = "0";
        button.setAttribute("src", "assets/images/icon-plus.svg")
      }
    });
  });
});

