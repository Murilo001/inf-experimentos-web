$(document).ready(function () {
    let homemComeGramas = 0.6;
    let quantidadeHomens = 0;
    let mulherComeGramas = 0.4;
    let quantidadeMulheres = 0;
    let criancaComeGramas = 0.2;
    let quantidadeCrianca = 0;
    let quantidadePessoas = 0;
    let quantidadeTotalComidaNecessaria = 0;

    $('input').on('change', function (e) {
        quantidadeHomens = $("#homem").val();
        quantidadeMulheres = $("#mulher").val();
        quantidadeCrianca = $("#crianca").val();
        quantidadePessoas = quantidadeHomens + quantidadeMulheres + quantidadeCrianca;
        quantidadeTotalComidaNecessaria = (homemComeGramas * quantidadeHomens)
            + (mulherComeGramas * quantidadeMulheres) + (criancaComeGramas * quantidadeCrianca);
        $('select').trigger('change');
    });

    // Quando um select for utilizado...
    $('select').on('change', function (e) {
        let contadorSelect = 0;
        let newCarnes = [];
        let newFrango = [];
        let newLinguica = [];
        let newPeixe = [];
        let newAcompanhamento = [];
        // O cálculo é refeito com todos os itens da tela.
        $('select').each(function () {
            if (contadorSelect == 0) {
                newCarnes = newCarnes.concat($(this).val());
            } else if (contadorSelect == 1) {
                newFrango = newFrango.concat($(this).val()); 
                contadorSelect++;
            } else if (contadorSelect == 2) {
                newLinguica = newLinguica.concat($(this).val()); 
                contadorSelect++;
            } else if (contadorSelect == 3) {
                newPeixe = newPeixe.concat($(this).val()); 
                contadorSelect++;
            } else {
                newAcompanhamento = newAcompanhamento.concat($(this).val());
            }
        });

        let htmlElement = '<li class="list-group-item d-flex justify-content-between align-items-center"> {{item}} '
                + '<span class="badge badge-primary badge-pill">quantidadeTotal KG</span>'
                + '</li>';
                
        function escreveResultado(html, item, type, sizeOfType) {
            html = html.replace("{{item}}", item);
            html = html.replace("quantidadeTotal", (quantidadeTotalComidaNecessaria / sizeOfType));
            $("#resultado" + type).append(html);
        }

        $("#resultadoCarnes").html("");
        newCarnes.forEach(function (item, index) {
            escreveResultado(htmlElement, item, 'Carnes', newCarnes.length);
        });

        $("#resultadoFrangos").html("");
        newFrango.forEach(function (item, index) {
            escreveResultado(htmlElement, item, 'Frangos', newFrango.length);
        });

        $("#resultadoLinguicas").html("");
        newLinguica.forEach(function (item, index) {
            escreveResultado(htmlElement, item, 'Linguicas', newLinguica.length);
        });

        $("#resultadoPeixes").html("");
        newPeixe.forEach(function (item, index) {
            escreveResultado(htmlElement, item, 'Peixes', newPeixe.length);
        });


        newAcompanhamento.forEach(function (item, index) {
            if (item == "Cerveja Lata ou Long Neck ") {
                console.log(item + " " + quantidadePessoas + " unidade");
            }
            if (item == "Refrigerante 2 Litros") {
                console.log(item + " " + quantidadePessoas + " unidade");
            }
            if (item == "Pães") {
                console.log(item + " " + quantidadePessoas + " unidade");
            }
            if (item == "Farofa Temperada 500g") {
                console.log(item + " " + quantidadePessoas + " unidade");
            }
            if (item == "Pacote Guardanapos") {
                console.log(item + " " + quantidadePessoas + " unidade");
            }
            if (item == "Copos de Plástico") {
                console.log(item + " " + quantidadePessoas + " unidade");
            }
            if (item == "Carvão 5kg") {
                console.log(item + " " + quantidadePessoas + " unidade");
            }
        })


    });
});