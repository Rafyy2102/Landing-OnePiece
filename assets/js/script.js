/*Para quando for apertar o botão abrir um video */
var v = document.getElementsByClassName('myVideo');
function classToggle(id) {
    v[id].classList.toggle('hide');
    v[id].classList.toggle('active');
}

function closeOtherVideo(id) {
    var c = document.getElementsByClassName('myVideo');
    for (var i = 0; i < c.length; i++) {
        if (i != id) {
            v[i].pause();
            c[i].classList.remove('active')
            c[i].classList.add('hide')
        }
    }
}
document.getElementById('toVideo1').addEventListener('click', function () { classToggle(0), closeOtherVideo(0) });

/*acessando o elemento input nome pelo id */
let nome = document.querySelector('#nome')
/*acessando o elemento input email pelo id */
let email = document.querySelector('#email')
/*acessando o elemento input titulo pelo id */
let titulo = document.querySelector('#titulo')

/*Fazer um uma validação se esta ou não prenchido os campos email, nome, texto */
let nomeok = false
let emailok = false
let titulook = false

/*validação do campo nome*/
function validaNome() {
    /*acessando o elemento nome */
    let txtNome = document.querySelector('#txtNome')
    /*ler o valor que esta dentro do input e seu tamanho*/
    if (nome.value.length < 3) {
        /*Mostra o texto se esta correto*/
        txtNome.innerHTML = 'Nome Inválido'
        /*Mostra a cor do texto */
        txtNome.style.color = 'red'
    } else {
        /*Mostra o texto se esta correto*/
        txtNome.innerHTML = 'Nome Válido'
        /*Mostra a cor do texto */
        txtNome.style.color = 'green'
        /*verificação*/
        nomeok = true
    }
}

/*validação do campo email*/
function validaEmail() {
    /*acessando o elemento email */
    let txtEmail = document.querySelector('#txtEmail')
    /*verficando se tem o caracter @ e o ponto se tiver retorna 1 se não rentorna -1*/
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        /*Mostra a cor do texto */
        txtEmail.style.color = 'red'
    } else {
        /*Mostra o texto se esta correto*/
        txtEmail.innerHTML = 'E-mail Válido'
        /*Mostra a cor do texto */
        txtEmail.style.color = 'green'
        /*verificação*/
        emailok = true
    }
}

/*validação do campo titulo*/
function validaTitulo() {
    /*acessando o elemento titulo */
    let txtTitulo = document.querySelector('#txtTitulo')
    /*colocando um limite no preenchimento de texto até 50 caracteres*/
    if (titulo.value.length > 50) {
        txtTitulo.innerHTML = 'Digite no máximo 50 caracteres'
        txtTitulo.style.color = 'red'
        /*o block traz a mensagem que pode ate 50 */
        txtTitulo.style.display = 'block'
    } else {
        /*retira o excesso de texto do titulo */
        txtTitulo.style.display = 'none'
        /*verificação*/
        titulook = true
    }
}

/*Validar o eviar*/
function enviar() {
    if (nomeok == true && emailok == true && titulook == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preenche o formulário corretamente antes de enviar')
    }
}