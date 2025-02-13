const conteiner = document.getElementById("flip");
const login = document.getElementById("cadastrarUser");
const cadastrar = document.getElementById("loginUser");

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
