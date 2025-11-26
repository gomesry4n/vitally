const menu = document.querySelector(".menu-lateral");
const fundo = document.querySelector(".fundo-menu");
const icon = document.querySelector(".menu-icon");

icon.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  fundo.classList.toggle("ativo");
});

fundo.addEventListener("click", () => {
  menu.classList.remove("ativo");
  fundo.classList.remove("ativo");
});
