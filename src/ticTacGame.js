const Player1 = require("./player1")
const Player2 = require("./player2")
const movesAvailable = require("./movesAvailable")
const winningCombinations = require("./winningCombinations")

class TicTacGame {
  constructor() {
    this.spacesTaken = []
    this.player1Turn = true
    this.player1Move = []
    this.player2Move = []
    this.letterCombinations1 = []
    this.letterCombinations2 = []
    this.winningLetters1 = []
  }

  getSpacesAvailable() {
    for (const available of this.spacesTaken) {
      return available.move
    }
  }

  doMovePlayer1(move) {
    for (let i = 0; i < movesAvailable.length; i++) {
      if (move == movesAvailable[i] && move !== this.getSpacesAvailable()) {
        if (this.player1Turn === true) {
          const moveTaken = new Player1(move)
          this.spacesTaken.push(moveTaken)
          this.player1Move.push(moveTaken)
          return moveTaken
        }
      }
    }
    return "MOVE UNAVAILABLE"
  }

  //change true to false

  doMovePlayer2(move) {
    for (let i = 0; i < movesAvailable.length; i++) {
      if (move == movesAvailable[i] && move !== this.getSpacesAvailable()) {
        if (this.player1Turn === true) {
          const moveTaken = new Player2(move)
          this.spacesTaken.push(moveTaken)
          this.player2Move.push(moveTaken)
          return moveTaken
        }
      }
    }
    return "MOVE UNAVAILABLE"
  }

  checkLetterComboPlayer1() {
    let combo = ""
    for (const player1moves of this.player1Move) {
      combo = combo + player1moves.move.charAt(0)
    }
    return combo
  }

  checkLetterComboPlayer2() {
    let combo2 = ""
    for (const player2moves of this.player2Move) {
      console.log(player2moves.move)
      combo2 = combo2 + player2moves.move.charAt(0)
    }
    return combo2
  }

  doWinningComboCheck() {
    if (this.player1Turn === true) {
      const checkLettersComboPlayer1 = this.checkLetterComboPlayer1()
      if (checkLettersComboPlayer1.includes("AAABBBCCCABCACBBACBCACBACAB")) {
        return "Congratulations Player1, you've won!!"
      }
      console.log(checkLettersComboPlayer1)
      return "Player 2 turn"
    }
  }

  // realised a flaw in this method, for moves lives aaba for exemple.
}

module.exports = TicTacGame
