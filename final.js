let opcao = "";
let texto = ""
let preco = 0
let total = 0
let count = 1
let contador = 0
let nota = ""
let caralho = false

function refri() {
    let bebida = (prompt("Digite qual a bebida: \n1 X=Guarana \n2 - X Coca-Cola"))
    const bebidas = ["Guarana", "Coca-Cola"]
    switch (bebida) {
        case "1":
            opcao = bebidas[0];
            preco = 5
            texto = "Preço final: " + (preco) + "</br>" + "Quantidade de produtos:" + 1
            document.getElementById("texto").innerHTML = texto;
            break;
        case "2":
            opcao = bebidas[1];
            preco = 4
            texto = "Preço final: " + (preco) + "</br>" + "Quantidade de produtos:" + 1
            document.getElementById("texto").innerHTML = texto;
            break;
        default:
            opcao = "Escolha errada"
            break;
    }

}
function r() {
    contador = (prompt("Digite o número de vezes que você quer comprar o produto"));
    count = 1
    while (count <= contador) {
        count++

        total += preco
        texto = "Preço final: " + total + "</br>" + "Quantidade de produtos:" + contador;
        document.getElementById("texto").innerHTML = texto;


    }


    document.getElementById("opcao").innerHTML = opcao;

}
function notafiscal() {
    caralho = true
    if (caralho == true) {
        nota += "Produto: " + opcao + "</br>" + "Quantidade: " + contador + "</br>" + "</br>"
        document.getElementById("nota").innerHTML = nota;
        document.getElementById("total").innerHTML = total;
    }
    caralho = false
    opcao = "";

}
texto = ""
preco = 0
total = 0
count = 1
contador = 0
bebida = ""