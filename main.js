const form = document.getElementById('form-agenda')
//const nContatos = document.getElementById('total-contatos')
const wppLogo = '<img src="./images/wpp.png" />'
const contatos = []
const numeros = []
let totalContatos = 0
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaLista()
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato')
    const inputTel = document.getElementById('tel-contato')

    contatos.push(inputNome.value)
    numeros.push(inputTel.value)

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTel.value}</td>`
    linha += `<td>${wppLogo}`
    linha+= '</tr>'

    linhas += linha
    
    totalContatos++

    inputNome.value = ''
    inputTel.value = ''    
}

function atualizaLista() {
    const lista = document.querySelector('tbody')
    lista.innerHTML = linhas
    document.getElementById('total-contatos').innerHTML = totalContatos
}