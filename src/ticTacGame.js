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
    this.letterCombinations2 = ""
    this.winningLetters1 = []
  }

  getSpacesAvailable() {
    for (const available of this.spacesTaken) {
      return available.move
    }
  }
    

  doMove(move) {
    for (let i = 0; i < movesAvailable.length; i++) {
      if (move == movesAvailable[i] && move !== this.getSpacesAvailable()) {
        if (this.player1Turn === true) {
          const moveTaken = new Player1(move)
          this.spacesTaken.push(moveTaken)
          this.player1Move.push(moveTaken)
          return moveTaken
        }
        if (this.player1Turn === false) {
          const moveTaken = new Player2(move)
          this.spacesTaken.push(moveTaken)
          this.player2Move.push(moveTaken)
          return moveTaken
        }
      }
    }
    return "MOVE UNAVAILABLE"
  }

  checkIfWon() {

    if (this.player1Turn === true) {
      for (const player1moves of this.player1Move) {
        this.letterCombinations1.push(player1moves.move.charAt(0))
        
        // console.log(winningCombinations)
        console.log(player1moves.move.charAt(0))
      if(JSON.stringify(this.letterCombinations1) === (JSON.stringify(winningCombinations.a) || JSON.stringify(winningCombinations.b) || JSON.stringify(winningCombinations.c) || JSON.stringify(winningCombinations.d) || JSON.stringify(winningCombinations.e) || JSON.stringify(winningCombinations.f) || JSON.stringify(winningCombinations.g) || JSON.stringify(winningCombinations.h) || JSON.stringify(winningCombinations.i))) {
     return `Congratulations PLAYER1, You've Won !!`
    }
      this.player1Turn = false
      return `Player 2 turn`
    }
  }

    if (this.player1Turn === false) {
      for (const player2moves of this.player2Move) {
        this.letterCombinations2 = this.letterCombinations2 + player2moves.move.charAt(0) 
        if(JSON.stringify(this.letterCombinations1) === (JSON.stringify(winningCombinations.a) || JSON.stringify(winningCombinations.b) || JSON.stringify(winningCombinations.c) || JSON.stringify(winningCombinations.d) || JSON.stringify(winningCombinations.e) || JSON.stringify(winningCombinations.f) || JSON.stringify(winningCombinations.g) || JSON.stringify(winningCombinations.h) || JSON.stringify(winningCombinations.i))) {
          return `Congratulations`
      }
      this.player1Turn = true
      return `Player 1 turn`
    }
  }

  

  }


    // if (this.player2Turn === true) {
    //   for (const player2moves of this.player2Move) {
    //     const letters = player2moves.move.charAt(0)
    //     player1Positions.push(letters)
    //     const player2 = JSON.stringify(player2Positions)
    //     if (
    //       player2 === a ||
    //       player2 === b ||
    //       player2 === c ||
    //       player2 === d ||
    //       player2 === e ||
    //       player2 === f ||
    //       player2 === g ||
    //       player2 === h ||
    //       player2 === i
    //     ) {
    //       return `Congratulation PLAYER 2, You've Won !!`
    //     }
    //   }
    //   this.player1Turn = true
    //   this.player2Turn = false
    //   return `Player 1 turn`
    // }
    
}

module.exports = TicTacGame
