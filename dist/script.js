function adicionarAnime() {
  var campoAnimeFavorito = document.querySelector('#anime')
  var animeFavorito = campoAnimeFavorito.value
  if(animeFavorito.endsWith('.jpg')) {
    listarAnimesNaTela(animeFavorito)
}else {
  alert("Anime fora da base de dados!")
}
  campoAnimeFavorito.value = ""
}

function listarAnimesNaTela(anime) {
var listaAnimes = document.querySelector('#listaAnimes')
var elementoAnime = "<img src=" + anime + ">"
listaAnimes.innerHTML = listaAnimes.innerHTML + elementoAnime
}