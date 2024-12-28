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

     const currenTestimony = document.querySelector('.testimony__body--show').dataset.id; 
       value = Number(currenTestimony),
       value+= add;
       
       if(value === sliders.length+1 || value === 0){
        value === 0 ? sliders.length : 1;

        console.log(value);
        
    }
       
       }
    
 })();