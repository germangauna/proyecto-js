(function () { //creamos una funcion


    //traemos a los elementos con la clase testimony__body


    const sliders = [...document.querySelectorAll('.testimony__body')];

    //traemos a los dos botoones, next y before
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    //creamos una constante para los valores
    let value;

    //le agregamos un evento click a cada boton con una funcion para los valores de nuestro carrucel 

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    })
    
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    })


    //creamos la funcion  changePosition() que sera la encargada de tener la logica de los botones con pasamos desde el
    //primer slider pase al segundo y del segundo al tercero, y potr ultimo del tercero al primero nuevamente,

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


//antes de poner la condicion if vamos a tener que traer el valor -1 a traves del Number(currentTestimony) y remover la clase

        sliders[ Number(currentTestimony)-1].classList.remove('testimony__body--show');

// en la condicion if pondremos, si el valor es igual a la mayor cantidad de slider +1, o sea que si se pasa de 3, o 
// el valor es iguañl a cero, lo que va a pasar es que: el valor si es igual a cero voy hacer que se vala al ultimo 
//slider porque no tengo slider 0 y no tengo sliders 4

        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }


        sliders[value-1].classList.add('testimony__body--show');

        console.log(value);
        
    }
}) ();







