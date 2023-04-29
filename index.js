const form = document.getElementById("form")
const nome = document.getElementById("name")
const submit = document.getElementById("submiteBnt")
const tel = document.getElementById("tel")

function validarNomeCompleto() {
    const nomeCompleto = nome.value.trim();
    var partesNome = nomeCompleto.split(" ");
    if (partesNome.length < 2) {
        nome.classList.add("error")
        document.getElementById("msg_error").style.display = "inline-block";
    } else {
        document.getElementById("msg_error").style.display = "none";
    }
}


tel.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});


form.addEventListener("submit", (e) => {
    e.preventDefault()
    validarNomeCompleto()

    const inputNome = nome.value
    const inputTel = tel.value

    let linha = '<tr>'
    linha += '<td>' + inputNome + '</td>'
    linha += '<td>' + inputTel + '</td>'
    linha += '</tr>'	
    
    const corpoTabela = document.getElementById("corpoTabela")
    corpoTabela.innerHTML += linha

})

