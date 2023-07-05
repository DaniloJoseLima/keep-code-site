var proximaImagem = 1;//guarda a posição da imagem que deve entrar na tela, no caso é a imagem da posição 1, pois a imagem 0 já está visível na tela
var zIndexAtual = 0;//usado para criar um aumento progressivo no z-index
var sliders = document.getElementById("sliders").children;//pega todos os nodos filhos da div #sliders, ou seja, nossa coleção de imagens
var interval = 20000;

function avancarImagem() {
  imagem = sliders[proximaImagem];//armazena a proxima imagem na fila em uma variável
  imagem.style.zIndex = ++zIndexAtual;//aumenta o índice do z-index e atribui à próxima imagem da fila
  imagem.style.marginLeft = "0%";//reseta a margem da imagem, fazendo ela entrar na tela

  if(proximaImagem-1 >= 0){
    imagemAtual = sliders[proximaImagem-1];//armazena a proxima imagem na fila em uma variável
    imagemAtual.style.marginLeft = "-110%";//reseta a margem da imagem, fazendo ela entrar na tela
  } else {
    imagemAtual = sliders[sliders.length-1];//armazena a proxima imagem na fila em uma variável
    imagemAtual.style.marginLeft = "-110%";
  }

  proximaImagem++;//ajusta o índice que aponta a próxima imagem

  //caso o índice tenha alcançado o fim da fila, resetá-lo
  if (proximaImagem >= sliders.length) {
    proximaImagem = 0;
  }

  //aqui está o truque para fazer com que as imagens que já passaram voltem para fora da área visível
  //o tempo de intervalo está aqui para que isso ocorra depois que a imagem ficou atrás da nova imagem da fila
  setTimeout(resetarImagens, 500);
}

function returnImagem() {
  
  
  if(proximaImagem == 1){
    imagem = sliders[sliders.length-1];
    imagem.style.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%";

    imagemAtual = sliders[proximaImagem-1];
    imagemAtual.style.marginLeft = "-110%";
  } else if(proximaImagem > 1) {    
    imagem = sliders[proximaImagem];
    imagem.style.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%";

    imagemAtual = sliders[proximaImagem-1];
    imagemAtual.style.marginLeft = "-110%";
  } else {
    imagem = sliders[sliders.length-2];
    imagem.style.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%";

    imagemAtual = sliders[proximaImagem+1];
    imagemAtual.style.marginLeft = "-110%";    
  }

  proximaImagem--;

  if (proximaImagem < 0) {
    proximaImagem = sliders.length-1;
  }
  setTimeout(resetarImagens, 500)
}

function resetarImagens() {
  imagemVisivel = proximaImagem - 1;

  //se o índice alcançou o início da fila, voltar para o final
  if (imagemVisivel < 0) {
    //o menos 1 está aqui pois o parâmetro length retorna o total de itens no array (no caso, 3)
    //precisamos da posição do último item do array (sempre é length-1)
    imagemVisivel = sliders.length - 1;
  }

  //retorna todas as imagens à sua posição original, menos a imagem visível
  for (var i = 0; i < sliders.length; i++) {
    if (i != imagemVisivel) {
      sliders[i].style.marginLeft = "100%";
    }
  }
  interval = 20000;
}

var intervalo = setInterval(avancarImagem, interval);