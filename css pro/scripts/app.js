console.log('salammmmm')
let $ = document
let concat_os = $.querySelector('.header__link')
let modal = $.querySelector('.salam')
let oo = concat_os.addEventListener('click',function(e){
    e.preventDefault()
    modal.style.display = `inline`
})