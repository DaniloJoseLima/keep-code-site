//FLUXO PARA ENVIO DE FORMULÁRIO E RETORNO NA MESMA URL
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.send;

let url = window.location.href;
url = url.split(/[?#]/)[0];
const form = document.querySelector('#form');
form.innerHTML += `
<input type="hidden" name="_next" value="${url}?send=true#contact">
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
