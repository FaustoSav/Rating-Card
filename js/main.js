let number = document.querySelectorAll('.number')
let logo = document.getElementById('logo-container')
let second = document.querySelectorAll('#second')
let first = document.querySelectorAll('#first')
let submit = document.getElementById('btn-submit')

let selectedNumber = document.getElementById('selected-text')
let nClicked

let changeCard = false


//Add & Remove number buttons efect.
number.forEach((n, i) => {

    number[i].addEventListener('click', () => {



        number.forEach((eachNumber, c) => {
            number[c].classList.remove('number-active')
            nClicked = number[c]
        })

        number[i].classList.add('number-active')
        nClicked = number[i]



        changeCard = true


    })

})

submit.addEventListener('click', () => {

    if (changeCard) {
        first.forEach((eachFirst, i) => {
        first[i].classList.add('first')
    })

    selectedNumber.innerText = 'You selected ' + nClicked.innerText + ' of 5'
    logo.classList.add('flex')
    second.forEach((eachSecond, c) => {
        second[c].classList.remove('second')
    })

    }

    
})
