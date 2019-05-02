$("document").ready(function() {

    $("#section-resultado").hide();

})

$("#calcular").click(function () {
    $("#section-resultado").show();
    let altura = $("#number-altura").val();
    let peso = $("#number-peso").val();
    let imc = peso / (altura * altura);
    let resultTitulo = "";
    let resultDescricao = "";
    if (imc < 18.5) {
        resultTitulo = "Abaixo do peso";
        resultDescricao = "";
    } else if (imc < 24.9) {
        resultTitulo = "Peso Normal";
        resultDescricao = "";
    } else if (imc < 29.9) {
        resultTitulo = "Sobrepeso";
        resultDescricao = "";
    } else if (imc < 34.9) {
        resultTitulo = "Obesidade 1";
        resultDescricao = "";
    } else if (imc < 39.9) {
        resultTitulo = "Obesidade 2";
        resultDescricao = "";
    } else if (imc > 40.0) {
        resultTitulo = "Obesidade 3";
        resultDescricao = "";
    } else {
        resultTitulo = "Valor inválido";
        resultDescricao = "Valor inválido";
    }

    $("#titulo").html(resultTitulo);
    $("#descricao").html(resultDescricao);


});