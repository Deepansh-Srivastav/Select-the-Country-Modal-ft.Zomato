let toggleButton = document.querySelector('.toggleButton')
let countryFlag = document.querySelector('.country')
let countryName = document.querySelector('.countryName')
let container = document.querySelector('.container')
let modal = document.querySelector('.modal')


toggleButton.addEventListener('click', () => {
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


/* 
===================================================================================
===================================================================================
===================================================================================
 Adding the image and name of selected country to display
===================================================================================
===================================================================================
===================================================================================
*/

let countries = document.querySelectorAll('.country-info')

var information = [
    {
        flagURL: countries[0].children[0].src,
        name: countries[0].innerText
    },
    {
        flagURL: countries[1].children[0].src,
        name: countries[1].innerText
    },
    {
        flagURL: countries[2].children[0].src,
        name: countries[2].innerText
    },
    {
        flagURL: countries[3].children[0].src,
        name: countries[3].innerText
    },
    {
        flagURL: countries[4].children[0].src,
        name: countries[4].innerText
    },
    {
        flagURL: countries[5].children[0].src,
        name: countries[5].innerText
    },
    {
        flagURL: countries[6].children[0].src,
        name: countries[6].innerText
    },
    {
        flagURL: countries[7].children[0].src,
        name: countries[7].innerText
    }

]


countries.forEach((country) => {

    country.addEventListener('click', () => {

        let i = parseInt(country.dataset.value);

        toggleButton.children[0].src = information[i].flagURL
 
        toggleButton.children[1].innerText = information[i].name

        container.classList.remove('active')
        modal.classList.remove('active-style')

    })
})

// for (let country of countries) {

//     country.addEventListener('click', function(){

//         let i = parseInt(country.dataset.value);

//         toggleButton.children[0].src = information[i].flagURL

//         toggleButton.children[1].innerText = information[i].name

        

//         container.classList.remove('active')
//         modal.classList.remove('active-style')

//     })
// }