const gridArea = document.querySelector('.area');

function  initialGrid() {
    for (let i = 1; i < 273; i++) {
        const div = document.createElement('div');
        div.classList.add('gridSquare')
        div.setAttribute('id', `gridSquare${i}`);
        console.log(div.id)
        gridArea.appendChild(div);
    }
}

initialGrid()

window.addEventListener('mouseover', (event) => {
    document.getElementsByClassName('gridSquare')
});

function addHighlight(target) {
    target.classList.add('highlighted');
}

function removeHighlight(target) {
    target.classList.remove('highlighted');
}

window.addEventListener('mouseover',function(e) {
    addHighlight(e.target);
});

window.addEventListener('mouseout',function(e) {
    removeHighlight(e.target);
});
