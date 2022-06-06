let turn = true;
let clickedCount = 0;

function play(btn) {
    btn.innerText = turn ? 'X' : 'O'
    btn.classList.add(turn ? 'xbtn': 'obtn')
    btn.setAttribute('disabled', 'disabled')

    turn = !turn 

    clickedCount++
    if(clickedCount == 16){
        alert('Game is finish')
    }
}

function resetGame() {
    if(!confirm('Do you want to reset game?')){
        return;
    }
    let btns = document.getElementsByClassName('btn')
    for(const element of btns){
        element.innerText = ''
        element.classList.remove('obtn')
        element.classList.remove('xbtn')
        element.removeAttribute("disabled")
    }
    turn = true;
    clickedCount = 0;
}