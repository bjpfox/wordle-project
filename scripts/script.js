const buttons = document.querySelectorAll('button')
for (let button of buttons) {
    button.addEventListener('click', function(event) {
        console.log(`You clicked: ${event.target.innerText}`)
        event.target.classList.remove('keyboard-letter-not-selected')
        event.target.classList.add('keyboard-letter-correct')
    })
}