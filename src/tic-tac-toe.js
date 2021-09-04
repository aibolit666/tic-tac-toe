class TicTacToe {
  constructor() {
    this.currentPlayer = "x";
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.currentPlayer;
      if (this.currentPlayer === "x") {
        this.currentPlayer = "o";
      } else if (this.currentPlayer === "o") {
        this.currentPlayer = "x";
      }
    }
  }

  isFinished() {
    if (this.getWinner() != null || this.isDraw()) {
      return true;
    } else {
      return false;
    }
  }

  // TODO
  getWinner() {
    return null;
  }

  noMoreTurns() {
    for (let i = 0; i < this.field.length; i++) {
      if (this.field[i].includes(null)) {
        return false;
      }
    }
    return true;
  }

  isDraw() {
    if (this.noMoreTurns() && this.getWinner() === null) {
      return true;
    } else {
      return false;
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
