//FLUXO PARA ENVIO DE FORMULÁRIO E RETORNO NA MESMA URL
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.send;

let url = window.location.href;
url = url.split(/[?#]/)[0];
const form = document.querySelector('#form');
form.innerHTML += `
<input type="hidden" name="_next" value="${url}#contact">
`

if (value) {
  const formSuccess = document.querySelector('#formSuccess');
  form.classList.add('hidden');
  formSuccess.classList.remove('hidden');
  formSuccess.classList.add('flex');
}
function resetForm() {
  const formSuccess = document.querySelector('#formSuccess');
  formSuccess.classList.add('hidden');
  formSuccess.classList.remove('flex');
  form.classList.remove('hidden');
  window.location.href = url + '#contact';
}
//FLUXO PARA ENVIO DE FORMULÁRIO E RETORNO NA MESMA URL

// MASCARA PARA TELEFONE
var phoneInput = document.getElementById('phone');
var myForm = document.forms.myForm;
var result = document.getElementById('result'); 

phoneInput.addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

// MASCARA PARA TELEFONE

//CARROSSEL
var proximaImagem = 1;//guarda a posição da imagem que deve entrar na tela, no caso é a imagem da posição 1, pois a imagem 0 já está visível na tela
var zIndexAtual = 0;//usado para criar um aumento progressivo no z-index
var sliders = document.getElementById("sliders").children;//pega todos os nodos filhos da div #sliders, ou seja, nossa coleção de imagens
var interval = 20000;
function avancarImagem() {
  imagem = sliders[proximaImagem];
  imagem.style.zIndex = ++zIndexAtual;
  imagem.style.marginLeft = "0%";

  if (proximaImagem - 1 >= 0) {
    imagemAtual = sliders[proximaImagem - 1];
    imagemAtual.style.marginLeft = "-110%";
  } else {
    imagemAtual = sliders[sliders.length - 1];
    imagemAtual.style.marginLeft = "-110%";
  }

  proximaImagem++;

  if (proximaImagem >= sliders.length) {
    proximaImagem = 0;
  }

  setTimeout(resetarImagens, 500);
}

function returnImagem() {


  if (proximaImagem == 1) {
    imagem = sliders[sliders.length - 1];
    imagem.style.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%";

    imagemAtual = sliders[proximaImagem - 1];
    imagemAtual.style.marginLeft = "-110%";
  } else if (proximaImagem > 1) {
    imagem = sliders[proximaImagem];
    imagem.style.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%";

    imagemAtual = sliders[proximaImagem - 1];
    imagemAtual.style.marginLeft = "-110%";
  } else {
    imagem = sliders[sliders.length - 2];
    imagem.style.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%";

    imagemAtual = sliders[proximaImagem + 1];
    imagemAtual.style.marginLeft = "-110%";
  }

  proximaImagem--;

  if (proximaImagem < 0) {
    proximaImagem = sliders.length - 1;
  }
  setTimeout(resetarImagens, 500)
}

function resetarImagens() {
  imagemVisivel = proximaImagem - 1;

  if (imagemVisivel < 0) {
    imagemVisivel = sliders.length - 1;
  }

  for (var i = 0; i < sliders.length; i++) {
    if (i != imagemVisivel) {
      sliders[i].style.marginLeft = "100%";
    }
  }
  interval = 20000;
}

var intervalo = setInterval(avancarImagem, interval);
//CARROSSEL