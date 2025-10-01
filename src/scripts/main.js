
import '../styles/main.scss';

import Game from '../modules/Game.class.js';

const game = new Game();

const mainButton = document.querySelector('.button');

mainButton.addEventListener('click', () => {
  if (mainButton.classList.contains('start')) {
    game.start();
  } else if (mainButton.classList.contains('restart')) {
    game.restart();
  }
});

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      game.moveLeft();
      game.getScore();
      break;
    case 'ArrowRight':
      game.moveRight();
      game.getScore();
      break;
    case 'ArrowUp':
      game.moveUp();
      game.getScore();
      break;
    case 'ArrowDown':
      game.moveDown();
      game.getScore();
      break;
  }
});
