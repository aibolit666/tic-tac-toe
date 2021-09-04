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

  getWinner() {
    if (
      this.field[0][0] === this.field[0][1] &&
      this.field[0][1] === this.field[0][2]
    ) {
      return this.field[0][0];
    } else if (
      this.field[1][0] === this.field[1][1] &&
      this.field[1][1] === this.field[1][2]
    ) {
      return this.field[1][0];
    } else if (
      this.field[2][0] === this.field[2][1] &&
      this.field[2][1] === this.field[2][2]
    ) {
      return this.field[2][0];
    } else if (
      this.field[0][0] === this.field[1][0] &&
      this.field[1][0] === this.field[2][0]
    ) {
      return this.field[0][0];
    } else if (
      this.field[0][1] === this.field[1][1] &&
      this.field[1][1] === this.field[2][1]
    ) {
      return this.field[0][1];
    } else if (
      this.field[0][2] === this.field[1][2] &&
      this.field[1][2] === this.field[2][2]
    ) {
      return this.field[0][2];
    } else if (
      this.field[0][0] === this.field[1][1] &&
      this.field[1][1] === this.field[2][2]
    ) {
      return this.field[0][0];
    } else if (
      this.field[0][2] === this.field[1][1] &&
      this.field[1][1] === this.field[2][0]
    ) {
      return this.field[0][2];
    }
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
