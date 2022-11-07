const iframe = document.querySelector('#iframe')
const lists = document.querySelectorAll('[ data-page]')

iframe.src = './1.0.html'

lists.forEach(list => {
    list.addEventListener('click', (e) => {
        iframe.src = `./${e.target.dataset.page}.html`
    })
})