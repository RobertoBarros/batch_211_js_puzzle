const hintButton = document.getElementById('show-hint');
const hint = document.querySelector('.hint');

hintButton.addEventListener('click', () => {
  hint.classList.add('active');
});

tiles = document.querySelectorAll('#grid td');

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    console.log(event.currentTarget);
    if (canMove(tile)) {
      moveTile(event.currentTarget);
      checkWin();
    }

  });
});

const checkWin = () => {
  const order = Array.from(document.querySelectorAll('td')).map( (e) => { return parseInt(e.innerHTML)});
  if (order.join(',') === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN') {
    alert('YOU WIN!!!');
  }
}


const canMove = (tile) => {
  const tileCol = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileCol = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  // console.log(`Tile row:${tileRow}|col:${tileCol}`);
  // console.log(`Empty row:${emptyTileRow}|col:${emptyTileCol}`);

  return (tileCol === emptyTileCol && tileRow === emptyTileRow + 1) ||
         (tileCol === emptyTileCol && tileRow === emptyTileRow - 1) ||
         (tileRow === emptyTileRow && tileCol === emptyTileCol + 1) ||
         (tileRow === emptyTileRow && tileCol === emptyTileCol - 1)
}

const moveTile = (tile) => {
  const emptyTile = document.querySelector('.empty');
  emptyTile.classList.remove('empty');
  emptyTile.innerText = tile.innerText;
  tile.innerText = '';
  tile.classList.add('empty');
}





