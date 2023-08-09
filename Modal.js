let toggleButton = document.querySelector('button')
let container = document.querySelector('.container')
let modal = document.querySelector('.modal')

toggleButton.addEventListener('click',()=>{
    container.classList.toggle('active')
    modal.classList.toggle('active-style')
})


/* 
===================================================================================
===================================================================================
===================================================================================
===============Logic To hide the modal when we click anywhere else on the body  ===
===================================================================================
===================================================================================
===================================================================================
*/

// document.body.addEventListener('click',(e)=>{
//     console.log("Toggle Button Contains it "+toggleButton.contains(e.target));
    
//     console.log("container Contains it "+toggleButton.contains(e.target));
//     if(toggleButton.contains(e.target)){
//         container.classList.toggle('active')
//     }
//     if(e.target!=toggleButton || !container.contains(e.target)){
//         container.classList.remove('active')
//     }
// })