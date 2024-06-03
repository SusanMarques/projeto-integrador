let trilho = document.getElementById('trilho')
let body = document.querySelector('body')


trilho.addEventListener('click', function(){
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    
})