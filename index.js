const container = document.querySelector('.container');

function addTiles (col, row) {
    const numTiles = col * row;
    container.innerHTML = ''
    for (let i = 0; i < numTiles; i++) {
        const tileWidth = Number(100/col);
        const tileHeight = Number(100/row);

        const tile = document.createElement("tile");

        container.appendChild(tile);
        tile.setAttribute('class', 'tile ' + String(i + 1));
        tile.setAttribute('style', `box-sizing: border-box; width: ${tileWidth}%;
        height: ${tileHeight}%; border-style: solid; border-width: 2px`);
        
    }

    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(function (tile) {
        tile.addEventListener('mouseover', function () {
            let randomR = Math.round(Math.random() * 255);
            let randomG = Math.round(Math.random() * 255);
            let randomB = Math.round(Math.random() * 255);
            tile.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        })
    })
}

const btn = document.querySelector('.button-box');

btn.addEventListener('click', function () {
    const colNumber = document.querySelector('#Columns').value
    const rowNumber = document.querySelector('#Rows').value

    if (colNumber > 64 || rowNumber > 64) {
        alert('Too many cells!!!')
    }

    addTiles(colNumber, rowNumber);
})