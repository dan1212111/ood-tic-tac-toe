const TicTacGame = require("../src/ticTacGame.js")
const Player1 = require("../src/player1.js")
const Player2 = require("../src/player2.js")

describe("Tic Tac Toe Game", () => {
  let ticTacGame

  beforeEach(() => {
    ticTacGame = new TicTacGame()
  })

  it("Do move - 9 max available - player1/error ", () => {
    // set up
    const expected = new Player1("A4", "X")
    const expectedTwo = "MOVE UNAVAILABLE"
    const expectedThree = "MOVE UNAVAILABLE"

    // execute
    const result = ticTacGame.doMovePlayer1("A4")
    const resultTwo = ticTacGame.doMovePlayer1("C10")
    const resultThree = ticTacGame.doMovePlayer1("C4")

    // verify
    expect(result).toEqual(expected)
    expect(resultTwo).toEqual(expectedTwo)
    expect(resultThree).toEqual(expectedThree)
  })

  it("Do move - 9 max available - player2/error ", () => {
    // set up
    const expected = new Player2("A4", "X")
    const expectedTwo = "MOVE UNAVAILABLE"
    const expectedThree = "MOVE UNAVAILABLE"

    // execute
    const result = ticTacGame.doMovePlayer2("A4")
    const resultTwo = ticTacGame.doMovePlayer2("C10")
    const resultThree = ticTacGame.doMovePlayer2("C4")

    // verify
    expect(result).toEqual(expected)
    expect(resultTwo).toEqual(expectedTwo)
    expect(resultThree).toEqual(expectedThree)
  })

  it("Player1 - Player2 / can't do same move", () => {
    // set up
    const expectedOne = new Player1("A4", "X")
    const expectedTwo = new Player2("B5", "O")
    const expectedThree = "MOVE UNAVAILABLE"
    const expectedFour = "MOVE UNAVAILABLE"

    // execute
    const resultOne = ticTacGame.doMovePlayer1("A4")
    const resultTwo = ticTacGame.doMovePlayer2("B5")
    const resultThree = ticTacGame.doMovePlayer1("A4")
    const resultFour = ticTacGame.doMovePlayer2("A4")

    // verify
    expect(resultOne).toEqual(expectedOne)
    expect(resultTwo).toEqual(expectedTwo)
    expect(resultThree).toEqual(expectedThree)
    expect(resultFour).toEqual(expectedFour)
  })

  it("Get letter combo - player1 ", () => {
    // set up
    const expected = new Player1("A4", "X")
    const expectedOne = "A"
    const expectedTwo = new Player1("B5", "X")
    const expectedThree = "AB"
    const expectedFour = new Player1("C9", "X")
    const expectedFive = "ABC"
   

    // execute
    const result = ticTacGame.doMovePlayer1("A4")
    const resultOne = ticTacGame.checkLetterComboPlayer1()
    const resultTwo = ticTacGame.doMovePlayer1("B5")
    const resultThree = ticTacGame.checkLetterComboPlayer1()
    const resultFour = ticTacGame.doMovePlayer1("C9")
    const resultFive = ticTacGame.checkLetterComboPlayer1()

    // verify
    expect(result).toEqual(expected)
    expect(resultOne).toEqual(expectedOne)
    expect(resultTwo).toEqual(expectedTwo)
    expect(resultThree).toEqual(expectedThree)
    expect(resultFour).toEqual(expectedFour)
    expect(resultFive).toEqual(expectedFive)
  })

  it("Get letter combo - player2 ", () => {
    // set up
    const expected = new Player2("A4", "X")
    const expectedOne = "A"
    const expectedTwo = new Player2("B5", "X")
    const expectedThree = "AB"
    const expectedFour = new Player2("C9", "X")
    const expectedFive = "ABC"
   

    // execute
    const result = ticTacGame.doMovePlayer2("A4")
    const resultOne = ticTacGame.checkLetterComboPlayer2()
    const resultTwo = ticTacGame.doMovePlayer2("B5")
    const resultThree = ticTacGame.checkLetterComboPlayer2()
    const resultFour = ticTacGame.doMovePlayer2("C9")
    const resultFive = ticTacGame.checkLetterComboPlayer2()

    // verify
    expect(result).toEqual(expected)
    expect(resultOne).toEqual(expectedOne)
    expect(resultTwo).toEqual(expectedTwo)
    expect(resultThree).toEqual(expectedThree)
    expect(resultFour).toEqual(expectedFour)
    expect(resultFive).toEqual(expectedFive)
  })

  it("Check if Player1 has WON - simple combination", () => {
    // set up
    const expected = "Player 2 turn"
    const expectedTwo = "Player 2 turn"
    const expectedThree = "Player 2 turn"
    const expectedFour = "Congratulations Player1, you've won!!"

    // execute
   ticTacGame.doMovePlayer1("A4")
   ticTacGame.checkLetterComboPlayer1()
   const result = ticTacGame.doWinningComboCheck()
ticTacGame.doMovePlayer1("A1")
 ticTacGame.checkLetterComboPlayer1()
 const resultTwo = ticTacGame.doWinningComboCheck()
ticTacGame.doMovePlayer1("B2")
ticTacGame.checkLetterComboPlayer1()
const resultThree = ticTacGame.doWinningComboCheck()
ticTacGame.doMovePlayer1("A7")
ticTacGame.checkLetterComboPlayer1()
const resultFour= ticTacGame.doWinningComboCheck()

    // verify
    expect(result).toEqual(expected)
    expect(resultTwo).toEqual(expectedTwo)
    expect(resultThree).toEqual(expectedThree)
    expect(resultFour).toEqual(expectedFour)
  })








  // it("Do move - 9 max available - error ", () => {
  //   // set up
  //   const expected = "MOVE UNAVAILABLE"

  //   // execute
  //   const result = ticTacGame.doMove("C10")

  //   // verify
  //   expect(result).toEqual(expected)
  // })

  // it("Player1/Player2 - passing turns ", () => {
  //   // set up
  //   const expectedOne = `Player 2 turn`
  //   const expectedTwo = `Player 1 turn`

  //   // execute
  //   ticTacGame.doMove("A4")
  //   const resultOne = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("B5")
  //   const resultTwo = ticTacGame.checkIfWon()

  //   // verify
  //   expect(resultOne).toEqual(expectedOne)
  //   expect(resultTwo).toEqual(expectedTwo)
  // })

  // it("Player1 wins game - simple combination", () => {
  //   // set up
  //   const expectedOne = `Player 2 turn`
  //   const expectedTwo = `Player 1 turn`
  //   const expectedThree = `Player 2 turn`
  //   const expectedFour = `Player 1 turn`
  //   const expectedFive = `Congratulations PLAYER1, You've Won !!`

  //   // execute
  //   ticTacGame.doMove("A4")
  //   const resultOne = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("B5")
  //   const resultTwo = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("A7")
  //   const resultThree = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("c9")
  //   const resultFour = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("A1")
  //   const resultFive = ticTacGame.checkIfWon()

  //   // verify
  //   expect(resultOne).toEqual(expectedOne)
  //   expect(resultTwo).toEqual(expectedTwo)
  //   expect(resultThree).toEqual(expectedThree)
  //   expect(resultFour).toEqual(expectedFour)
  //   expect(resultFive).toEqual(expectedFive)
  // })

  // it("Player 2 - check if won - complexe combination ", () => {
  //   // set up
  //   const expectedOne = `Player 2 turn`
  //   const expectedTwo = `Player 1 turn`
  //   const expectedThree = `Player 2 turn`
  //   const expectedFour = `Player 1 turn`
  //   const expectedFive = `Player 2 turn`
  //   const expectedSix = `Congratulation PLAYER 2, You've Won !!`

  //   // execute
  //   ticTacGame.doMove("B1")
  //   const resultOne = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("B5")
  //   const resultTwo = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("C9")
  //   const resultThree = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("C3")
  //   const resultFour = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("C6")
  //   const resultFive = ticTacGame.checkIfWon()
  //   ticTacGame.doMove("A7")
  //   const resultSix = ticTacGame.checkIfWon()

  //   // verify
  //   expect(resultOne).toEqual(expectedOne)
  //   expect(resultTwo).toEqual(expectedTwo)
  //   expect(resultThree).toEqual(expectedThree)
  //   expect(resultFour).toEqual(expectedFour)
  //   expect(resultFive).toEqual(expectedFive)
  //   expect(resultSix).toEqual(expectedSix)
  // })


})
