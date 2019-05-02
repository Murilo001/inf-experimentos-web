$(document).ready(function() {

    $("#section-resultado").hide();
    $('#number-altura').mask("#0.00", {reverse: true});
    $('#number-peso').mask("#0.000", {reverse: true});
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
        resultDescricao = "Estar abaixo do peso é uma condição em que a pessoa pesa menos do que é considerado adequado para aquela altura, idade e sexo. Uma pessoa nestas condições pode estar com alguma doença que a está emagrecendo ou sua nutrição não está boa o suficiente. Normalmente estas pessoas podem ter deficiências de nutrientes como vitaminas, sais minerais, proteínas, gorduras ou sob o risco de estar com anorexia.";
    } else if (imc < 24.9) {
        resultTitulo = "Peso Normal";
        resultDescricao = "Estar dentro da faixa de peso normal é significa ter um peso considerado adequado para sua altura, idade e sexo, de acordo com as faixas do IMC - momento de fazer a manutenção do peso Para manter o peso é importante manter uma dieta balanceada (não basta alimentos corretos, mas também quantidades corretas) para seu organismo. Devem ser avaliados peso, idade, composição corporal, presença de doenças e/ou comorbidades.";
    } else if (imc < 29.9) {
        resultTitulo = "Sobrepeso";
        resultDescricao = "O sobrepeso é uma condição em que a pessoa pesa mais do que é considerado adequado para aquela altura, idade e sexo. O sedentarismo e os maus hábitos alimentares levam ao aumento dessa parcela de indivíduos com sobrepeso a cada ano. Essa faixa, se analisada junto com outras medidas e índices, pode demonstrar um risco maior de doenças como diabetes tipo 2, dislipidemia (com colesterol HDL baixo e triglicérides altos), ácido úrico aumentado, hipertensão, entre outras.";
    } else if (imc < 34.9) {
        resultTitulo = "Obesidade 1";
        resultDescricao = "O tratamento é realizado através de dieta apropriada com avaliação médica em conjunto com a prática de exercícios, desde que o paciente seja avaliado e liberado pelo médico. Além disso, é preciso que o paciente realize as atividades com o acompanhamento de um profissional de educação física. Em alguns casos avaliados pelo médico, pode-se fazer o uso de remédios para emagrecer para ajudar no controle do peso.";
    } else if (imc < 39.9) {
        resultTitulo = "Obesidade 2";
        resultDescricao = "Os riscos associados à obesidade de grau II são mais acentuados. Entre eles, estão a esteatose hepática, doenças articulares, hipertensão, diabetes mellitus, síndrome metabólica, cânceres, infarto agudo do miocárdio e acidente vascular cerebral, lembrando que estes dois últimos são as principais causas de morte no Brasil e no mundo.";
    } else if (imc > 40.0) {
        resultTitulo = "Obesidade 3";
        resultDescricao = "Entre as patologias associadas à obesidade grau 3, estão os distúrbios hormonais, cardiopatias, morte súbita, dermatites, osteoporose, hipertensão, hepatopatias e insuficiência venosa. Porém, segundo a Organização Mundial de Saúde (OMS), a obesidade de grau III é a principal causa de morte evitável do mundo.";
    } else {
        resultTitulo = "Valor inválido";
        resultDescricao = "";
    }

    $("#titulo").html(resultTitulo);
    $("#descricao").html(resultDescricao);


});