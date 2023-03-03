var myWorker = new Worker("worker.js");
let app = document.getElementById('app'),
    btn_pesquisa = document.getElementById('search-pokemon');

// Um ouvinte da resposta do Worker.
myWorker.addEventListener('message', function(e) {
    let data = e.data;
    app.insertAdjacentHTML('beforeend', data.response);
});

// ouvinte do botão carregar
btn_pesquisa.addEventListener('click', function(e) {
   e.preventDefault();
   let namePokemon = document.querySelector('input[name="name_pokemon"]').value.trim();
   if(namePokemon.length) {
       myWorker.postMessage({pokemon: namePokemon});
   }
});