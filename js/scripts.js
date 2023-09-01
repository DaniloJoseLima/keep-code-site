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


const mobileMenuButton = document.querySelector('#mobileMenuButton');
const mobileMenu = document.querySelector('#mobileMenu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

function hiddenMenu() {
  mobileMenu.classList.toggle('hidden');
}

function alterValues(value) {
  let benefitsTitle = document.getElementById('benefitsTitle');
  let benefitsText = document.getElementById('benefitsText');
  let buttonActive = document.getElementById('buttonActive' + value);
  let button = document.getElementById('button' + value);
  if(value == 'Step01') {
    let buttonActiveStep02 = document.getElementById('buttonActiveStep02');
    let buttonStep02 = document.getElementById('buttonStep02');
    let buttonActiveStep03 = document.getElementById('buttonActiveStep03');
    let buttonStep03 = document.getElementById('buttonStep03');

    benefitsTitle.innerHTML = 'Aumento da Atenção';
    benefitsText.innerHTML = 'Uma nova logomarca pode atrair a atenção da mídia e da clientela, trazendo mais visibilidade para a empresa.';
    buttonActive.classList.remove('opacity-0');
    buttonActive.classList.add('opacity-100');
    button.classList.add('opacity-0');
    button.classList.remove('opacity-100');
    
    buttonActiveStep03.classList.add('opacity-0');
    buttonActiveStep02.classList.add('opacity-0');
    buttonActiveStep03.classList.remove('opacity-100');
    buttonActiveStep02.classList.remove('opacity-100');
    buttonStep03.classList.remove('opacity-0');
    buttonStep02.classList.remove('opacity-0');
    buttonStep03.classList.add('opacity-100');
    buttonStep02.classList.add('opacity-100');
  }
  else if(value == 'Step02') {
    let buttonActiveStep01 = document.getElementById('buttonActiveStep01');
    let buttonStep01 = document.getElementById('buttonStep01');
    let buttonActiveStep03 = document.getElementById('buttonActiveStep03');
    let buttonStep03 = document.getElementById('buttonStep03');

    benefitsTitle.innerHTML = 'Modernização da marca';
    benefitsText.innerHTML = 'Atualizar a logomarca e o site da empresa pode ajudar a modernizar sua imagem e dar-lhes uma aparência nova e fresca.';
    buttonActive.classList.remove('opacity-0');
    buttonActive.classList.add('opacity-100');
    button.classList.add('opacity-0');
    button.classList.remove('opacity-100');
    
    buttonActiveStep01.classList.add('opacity-0');
    buttonActiveStep03.classList.add('opacity-0');
    buttonActiveStep01.classList.remove('opacity-100');
    buttonActiveStep03.classList.remove('opacity-100');
    buttonStep01.classList.remove('opacity-0');
    buttonStep03.classList.remove('opacity-0');
    buttonStep01.classList.add('opacity-100');
    buttonStep03.classList.add('opacity-100');
  }
  else if(value == 'Step03') {
    let buttonActiveStep01 = document.getElementById('buttonActiveStep01');
    let buttonStep01 = document.getElementById('buttonStep01');
    let buttonActiveStep02 = document.getElementById('buttonActiveStep02');
    let buttonStep02 = document.getElementById('buttonStep02');

    benefitsTitle.innerHTML = 'Melhora na experiência';
    benefitsText.innerHTML = 'Uma atualização cuidadosa pode melhorar a forma como os clientes interagem com a marca e seus serviços online.';
    buttonActive.classList.remove('opacity-0');
    buttonActive.classList.add('opacity-100');
    button.classList.add('opacity-0');
    button.classList.remove('opacity-100');
    
    buttonActiveStep01.classList.add('opacity-0');
    buttonActiveStep02.classList.add('opacity-0');
    buttonActiveStep01.classList.remove('opacity-100');
    buttonActiveStep02.classList.remove('opacity-100');
    buttonStep01.classList.remove('opacity-0');
    buttonStep02.classList.remove('opacity-0');
    buttonStep01.classList.add('opacity-100');
    buttonStep02.classList.add('opacity-100');
  }
}



var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 1000,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  autoplay: {
    delay: 2000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});


// FUNÇÃO PARA ANIMAR COMPONENTES DA TELA

const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}

// FUNÇÃO PARA FECHAR MENU MOBILE

function slideOut() {
  document.getElementById('check').checked = false;
}