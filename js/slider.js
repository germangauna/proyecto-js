 (function () {
    // trajimos la clase .testimony__body
    const sliders =  [...document.querySelectorAll('.testimony__body')];
    // creamos boton de la derecha
    const buttonNext = document.querySelector('#next');
    // creamos boton de la izquierda
    const buttonBefore = document.querySelector('#before');
    let value;


    buttonNext.addEventListener('click', () => {
        changePosition(1);
     });
    

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
     });

     const changePosition = (add) => {
        console.log(add);
        
     }
    
 })();