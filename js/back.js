var topknop = document.querySelector('.back-to-top');
var pagina = document.querySelector('.receptpagina');

function scrollUp(){
	topknop.classList.toggle('showtop')
}

document.addEventListener('scroll', scrollUp)



// console.log(topknop)