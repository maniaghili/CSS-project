console.log('salammmmm')
let $ = document
let concat_os = $.querySelector('.header__link')
let modal = $.querySelector('.salam')
let X = $.querySelector('#X')
let oo = concat_os.addEventListener('click',function(e){
    e.preventDefault()
    modal.style.display = `inline`
})
let hidemodal = X.addEventListener('click',function(){
    modal.style.display = `none`

})