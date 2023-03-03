
const formulario = document.getElementById('form-envio'),
      btn_enviar = document.getElementById('btn-enviar');


// ouviente do botão clicar
btn_enviar.addEventListener('click', function (e) {
    e.preventDefault();

    // Recuperamos os elementos
    let select_simples = formulario.querySelector('select[name="select-simples"]'),
        select_multiple = formulario.querySelector('select[name="select-multiple"]'),
        input_simples = formulario.querySelector('input[name="input_simples"]'),
        lista_checkbox = formulario.querySelectorAll('input[name="lista_checked[]"]'),
        radio_padrao = formulario.querySelectorAll('input[name="radio_padrao"]'),
        input_arquivo = formulario.querySelector('input[name="arquivo"]');

    /**
     * Agora Capturamos os valores, perceba que utilizamos as arrows funtions nos campos
     * que são multiplos e campos de lista
     * @type {number}
     */

    let valor_select_simples = parseInt(select_simples.options[select_simples.selectedIndex].value),
        valor_input_simples = input_simples.value,
        valor_input_arquivo = input_arquivo.files[0],


        // Aqui utilizamos as arrows funcitons, que salvam nossas vidas.
        valor_radio_padrao = Array.from(radio_padrao).filter(value => value.checked).map(({value}) => value).join(''),
        valores_select_multiple = Array.from(select_multiple.selectedOptions).map(({ value }) => value),
        valores_checkbox = Array.from(lista_checkbox).filter(value => value.checked).map(({value}) => value);


        // Por fim imprimo os campos apenas para verificacao
        console.log(valor_select_simples);
        console.log(valor_input_simples);
        console.log(valor_input_arquivo);
        console.log(valor_radio_padrao);
        console.log(valores_select_multiple);
        console.log(valores_checkbox);
});

