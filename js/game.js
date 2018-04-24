const states = {
  IN_GAME: 'state-game_in-game',
  GAME_OVER: 'stage-game_game-over'
};

class Game {
  constructor() {
    this.state = states.IN_GAME;
  }

  setState(state) {
    document.querySelector(`#${this.state}`).classList.totgle('active');
    this.state = state;
    stateManager(states.IN_GAME)
  }
}
