class Carro {
    Marca: string
    Modelo: string
    Categoria: string
    Ano: number
    Quilometragem: number
    Valor: number

    constructor(marca: string, modelo: string, categoria: string, ano: number, quilometragem: number, valor: number) {
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
}


function CriarCarro() {
    let marca = prompt("Insira a marca do carro")
    let modelo = prompt("Insira o modelo do carro")
    let categoria = prompt("Insira a categoria do carro")
    let ano = Number(prompt("Insira o ano do carro"))
    let quilometragem = Number(prompt("Insira a quilometragem do carro"))
    let valor = Number(prompt("Insira o Valor do carro"))

    let carroNovo = new Carro(marca, modelo, categoria, ano, quilometragem, valor)
    return carroNovo
}


function Get() {

    return fetch("https://apigenerator.dronahq.com/api/ckev-x7x/Carros")

        .then((response) => response.json())

        .then((data) => console.log(data));

}

async function GetId(url = '') {

    const response = await fetch(url, {

        method: 'GET', // *GET, POST, PUT, DELETE, etc.

        mode: 'cors',

        cache: 'no-cache',

        credentials: 'same-origin',

        headers: {

            'Content-Type': 'application/json'

        },

        redirect: 'follow',

        referrerPolicy: 'no-referrer',
    });

    return response.json();

}

async function Post(url = '', data = {}) {

    const response = await fetch(url, {

        method: 'POST', // *GET, POST, PUT, DELETE, etc.

        mode: 'cors',

        cache: 'no-cache',

        credentials: 'same-origin',

        headers: {

            'Content-Type': 'application/json'

        },

        redirect: 'follow',

        referrerPolicy: 'no-referrer',

        body: JSON.stringify(data)

    });

    return response.json();

}

async function Delete(url = '') {

    const response = await fetch(url, {

        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.

        mode: 'cors',

        cache: 'no-cache',

        credentials: 'same-origin',

        headers: {

            'Content-Type': 'application/json'

        },

        redirect: 'follow',

        referrerPolicy: 'no-referrer',
    });

    return response.json();

}

async function Put(url = '', data = {}) {

    const response = await fetch(url, {

        method: 'PUT', // *GET, POST, PUT, DELETE, etc.

        mode: 'cors',

        cache: 'no-cache',

        credentials: 'same-origin',

        headers: {

            'Content-Type': 'application/json'

        },

        redirect: 'follow',

        referrerPolicy: 'no-referrer',
    });

    return response.json();

}

let id: string
let url: string
let condition = true
while (condition) {

    let opcao = prompt("Insira a opção desejada, (1: chamar todas os obejtos / 2: chamar um objeto pelo ID / 3: Inserir e criar um novo objeto / 4: Deletar um objeto / 5: Atualizar um objeto / 6: Encerrar o programa)")

    switch (opcao) {
        case "1":
            Get()
            break;

        case "2":
            id = prompt("Insira o ID do objeto")
            url = "https://apigenerator.dronahq.com/api/ckev-x7x/Carros" + "/" + id
            GetId(url)
            break;

        case "3":
            url = "https://apigenerator.dronahq.com/api/ckev-x7x/Carros"
            Post(url, CriarCarro())
            break;

        case "4":
            id = prompt("Insira o ID do objeto")
            url = "https://apigenerator.dronahq.com/api/ckev-x7x/Carros" + "/" + id
            Delete(url)
            break;

        case "5":
            id = prompt("Insira o ID do objeto")
            url = "https://apigenerator.dronahq.com/api/ckev-x7x/Carros" + "/" + id

            Put(url, CriarCarro())
                .then(response => {
                    console.log('Resposta:', response);
                })
                .catch(error => {
                    console.error('Erro:', error);
                });
            break;

        case "6":
            console.log("Programa encerrado com sucesso")
            condition = false
            break;

        default:
            console.log("Opção inserida inválida")
            condition = false
            break;
    }

}