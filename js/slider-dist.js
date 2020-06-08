//imagenes
let images = ['img/slide/1.png' , ['img/slide/2.png'], ['img/slide/4.png'];

//elemento a cargar
let slider = document.getElementById("slider-dist.js");

//elemento general del slider

let sliderContainer =  document.getElementById("slider-container");

//ancho del contenedor
slider.style.width = images.lenght * 100 +  "%";

//elemento para cargar la navengacion

let sliderNav = document.getElementById("slider-navigation");

//saber si el slide esta activo

let active = true;

//para saber ei el raton esta sobre el slide

sliderContainer.addEventListener("mouseover", ()=>{

	if(active) {
	active = false;
	console.log(active);

	}
} );

sliderContainer.addEventListener("mouseout", ()=>{

	if(!active) {
	active = true;
	console.log(active);
	}
} );