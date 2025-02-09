const conteiner = document.getElementById("flip");
const login = document.getElementById("cadastrarUser");
const cadastrar = document.getElementById("loginUser");

login.addEventListener("click", (e) => {
  e.preventDefault();
  conteiner.classList.add("ativo");
  console.log(login);
});

cadastrar.addEventListener("click", (e) => {
  e.preventDefault();
  conteiner.classList.remove("ativo");
  console.log(cadastrar);
});

/* let linkEvento = document.getElementByIdr("cadastrarUser");

function addClass() {
  const elemento = document.querySelector("#flip > #box_cadastro");
  elemento.classList.add("ativo");
}

function removeClass() {
  const elemento = document.querySelector("#flip > #box_cadrasto");
  elemento.classList.remove("ativo");
}

linkEvento.addEventListener("click", () => {
  if (
    document.querySelector("#flip > #box_cadastro").classList.contains("ativo")
  ) {
    removeClass();
  } else {
    addClass();
  }
}); */
