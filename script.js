window.addEventListener("load", () => {
  const image = document.querySelector(".image");
  const cards = document.querySelectorAll(".card-section");

  cards.forEach((card) => {
    card.addEventListener("dragover",e => {
      e.preventDefault()
      card.classList.add("hovered");
    })

    card.addEventListener("dragleave",()=>{
      card.classList.remove("hovered");
    })

    card.addEventListener("drop",()=>{
      card.append(image)
    })
  });
});
