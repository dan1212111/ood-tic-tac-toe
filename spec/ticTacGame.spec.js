const TicTacGame = require("../src/ticTacGame.js")
const Player1 = require("../src/player1.js")
const Player2 = require("../src/player2.js")

describe("Tic Tac Toe Game", () => {
  let ticTacGame

  beforeEach(() => {
    ticTacGame = new TicTacGame()
  })

  it("Do move - max available spaces 9 - error ", () => {
    // set up
    const expected = "MOVE UNAVAILABLE"

    // execute
    const result = ticTacGame.doMove("C10")

    // verify
    expect(result).toEqual(expected)
  })

  it("Do move - 9 max available - player1/player2/error ", () => {
    // set up
    const expected = new Player1("A4", "X")
    // const expectedTwo = new Player2("B5", "O")
    // const expectedThree = "MOVE UNAVAILABLE"

    // execute
    const result = ticTacGame.doMove("A4")
    // ticTacGame.checkIfWon()
    // const resultTwo = ticTacGame.doMove("B5")
    // // ticTacGame.checkIfWon()
    // const resultThree = ticTacGame.doMove("A4")

    // verify
    expect(result).toEqual(expected)
    // expect(resultTwo).toEqual(expectedTwo)
    // expect(resultThree).toEqual(expectedThree)
  })
  it("Do move - 9 max available - error ", () => {
    // set up
    const expected = "MOVE UNAVAILABLE"

    // execute
    const result = ticTacGame.doMove("C10")

    // verify
    expect(result).toEqual(expected)
  })

  it("Player1/Player2 - passing turns ", () => {
    // set up
    const expectedOne = `Player 2 turn`
    const expectedTwo = `Player 1 turn`

    // execute
    ticTacGame.doMove("A4")
    const resultOne = ticTacGame.checkIfWon()
    ticTacGame.doMove("B5")
    const resultTwo = ticTacGame.checkIfWon()

    // verify
    expect(resultOne).toEqual(expectedOne)
    expect(resultTwo).toEqual(expectedTwo)
  })

  it("Player1 wins game - simple combination", () => {
    // set up
    const expectedOne = `Player 2 turn`
    const expectedTwo = `Player 1 turn`
    const expectedThree = `Player 2 turn`
    const expectedFour = `Player 1 turn`
    const expectedFive = `Congratulations PLAYER1, You've Won !!`

    // execute
    ticTacGame.doMove("A4")
    const resultOne = ticTacGame.checkIfWon()
    ticTacGame.doMove("B5")
    const resultTwo = ticTacGame.checkIfWon()
    ticTacGame.doMove("A7")
    const resultThree = ticTacGame.checkIfWon()
    ticTacGame.doMove("c9")
    const resultFour = ticTacGame.checkIfWon()
    ticTacGame.doMove("A1")
    const resultFive = ticTacGame.checkIfWon()

    // verify
    expect(resultOne).toEqual(expectedOne)
    expect(resultTwo).toEqual(expectedTwo)
    expect(resultThree).toEqual(expectedThree)
    expect(resultFour).toEqual(expectedFour)
    expect(resultFive).toEqual(expectedFive)
  })

  it("Player 2 - check if won - complexe combination ", () => {
    // set up
    const expectedOne = `Player 2 turn`
    const expectedTwo = `Player 1 turn`
    const expectedThree = `Player 2 turn`
    const expectedFour = `Player 1 turn`
    const expectedFive = `Player 2 turn`
    const expectedSix = `Congratulation PLAYER 2, You've Won !!`

    // execute
    ticTacGame.doMove("B1")
    const resultOne = ticTacGame.checkIfWon()
    ticTacGame.doMove("B5")
    const resultTwo = ticTacGame.checkIfWon()
    ticTacGame.doMove("C9")
    const resultThree = ticTacGame.checkIfWon()
    ticTacGame.doMove("C3")
    const resultFour = ticTacGame.checkIfWon()
    ticTacGame.doMove("C6")
    const resultFive = ticTacGame.checkIfWon()
    ticTacGame.doMove("A7")
    const resultSix = ticTacGame.checkIfWon()

    // verify
    expect(resultOne).toEqual(expectedOne)
    expect(resultTwo).toEqual(expectedTwo)
    expect(resultThree).toEqual(expectedThree)
    expect(resultFour).toEqual(expectedFour)
    expect(resultFive).toEqual(expectedFive)
    expect(resultSix).toEqual(expectedSix)
  })


})
