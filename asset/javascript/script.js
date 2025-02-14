//  FUNÇÃO DARK E LIGTH

let trilho = document.getElementById("trilho");
let body = document.querySelector("body");
let linksUteis = document.getElementById("linkUteis");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("dark");
  body.classList.toggle("dark");
  linksUteis.classList.toggle("dark");
});

// FUNÇÃO VISUALIZAR E NAO VISUALIZAR SENHA

let verSenha = document.getElementById("verSenha");
let senha = document.getElementById("senha");

verSenha.addEventListener("click", () => {
  //verifica se o tipo do campo de senha é "password" ou "texto"

  if (senha.type === "password") {
    senha.type = "text"; //torna a senha visivel
    verSenha.textContent = "🙈"; // troca o icone para olho fechado
  } else {
    senha.type = "password"; // torna a senha oculta novamento
    verSenha.textContent = "👁️";
  }
});

// FUNÇÃO FLIP DO LOGIN E CADASTRO

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
