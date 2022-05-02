const radio = document.querySelectorAll('.radio');
const button = document.querySelector('.submit');
const rating = document.querySelector('#rating');
const thanks = document.querySelector('#thanks');
const texto = document.querySelector('.selected-number')

let numero = -1;

const seleccionado = radio.forEach(element => {
    element.addEventListener('click', function(){
        for(let i = 0; i < radio.length; i++){
            radio[i].classList.remove('seleccionado');
        }
        element.classList.add('seleccionado');
        numero = element.textContent;
    });
});

const enviar = button.addEventListener('click',function(e){
    rating.setAttribute('hidden', true);
    thanks.removeAttribute('hidden', false);
    texto.textContent = `you selected ${numero} out of 5`;
    e.preventDefault();
});
