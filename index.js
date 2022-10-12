const container = document.querySelector('.container');

const test = document.createElement("test");
test.setAttribute('style', 'color: red');


function addTiles (col, row) {
    const numTiles = col * row;
    for (let i = 0; i < numTiles; i++) {
        const tileWidth = Number(100/col);
        const tileHeight = Number(100/row);

        const tile = document.createElement("tile");
        container.appendChild(tile);
        tile.setAttribute('class', 'tile ' + String(i + 1));
        tile.setAttribute('style', `box-sizing: border-box; width: ${tileWidth}%;
        height: ${tileHeight}%; border-style: solid; border-width: 2px`);

    }
    
}

addTiles(4, 4);