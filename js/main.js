function clicou(){
    
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar aqui!!</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert ("Obrigado por ter clicado aqui!!");
}

function redirecionar() {
    window.open("http://uol.com.br");
}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto");
}
function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert("Página carregada");
}
function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*
function soma(n1, n2) {
    return n1 + n2;
}
*/

/*
function validaIdade (idade) {
    var validar;
    if(idade >= 18){
        validar = true;
    }
    else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual é sua idade?");
console.log(validaIdade(idade));

// alert(soma(10, 20));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getSeconds());
alert(d.getUTCHours());
*/

/*
var count;
for(count = 1; count <= 10; count ++){
    console.log(count);
    alert(count);
}
8?

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count = count + 1;
}
*/

/*
var idade = prompt("Qual é a sua idade?");
if (idade > 18) {
    console.log ("Maior de idade");
}
else {
    console.log ("Menor de idade");
}
*/

/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor: "roxa"}]
console.log (frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log ("O nome da fruta é: " + fruta.nome);
console.log ("A sua cor é: " + fruta.cor);
*/

// var lista = ["pera", "banana", "melancia"];
// lista.push("uva");
// // lista.pop();
// console.log(lista);
// console.log (lista.toString());
// console.log (lista.join(" - "));


/*
var nome = "Eduardo Rodrigues Vieira";
var idade = 39;
var idade2 = 10;
var frase = "Brasil é o melhor time do mundo";
// alert (nome + " tem " + idade + idade2 " anos");
// alert (idade + idade2);
console.log (nome);
console.log (idade + idade2);
console.log (frase.replace("Brasil", "Japão"));
console.log (frase.toUpperCase());
*/