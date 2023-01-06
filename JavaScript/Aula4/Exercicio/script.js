$("#clear").click(function () {
    $("#cpf").val("")
})

$("#enviar").click(function () {
    $("#cpf").val(VerificaCPF)
})


function VerificaCPF() {
    
    var cpf = document.getElementById("cpf").value;
    var soma;
    var resto;
    soma = 0;
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(cpf.substring(9, 10))) {
        return "CPF invalido";
    }
    
    soma = 0;
    
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(cpf.substring(10, 11))) {
        return "CPF Invalido";
    }
    
    return "CPF Valido";
    }