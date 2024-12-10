let calcular = document.getElementById('calcular');

calcular.addEventListener('click',function (e) {
    e.preventDefault(); // prevenir o envio do formulario

    //pegar os valores dos inputs 
    let altura = parseFloat(document.getElementById('altura').value);
    let peso =  parseFloat(document.getElementById('peso').value);
    //verificar se os valores são validos
    if (isNaN(altura) || isNaN(peso)) {
        document.getElementById('resposta').textContent = "Por Favor inserir numeros validos";
    }else{
        let imc = (altura / peso*peso);
        document.getElementById('resposta').textContent = "O resultado do imc" + soma;
    }})