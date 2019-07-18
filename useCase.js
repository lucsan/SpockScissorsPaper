const rsp = require('./rspalator.js')

let playerOne = 'spock'
let playerTwo = 'paper'

const ssp = rsp.rspalator() // Uses default matrix
const result = ssp.haveAGo(playerOne, playerTwo)

let outcomeString = ''
if (result.w == 'draw') outcomeString = `${result.m}`
if (result.w == playerOne) {
  outcomeString = `Player One wins! ${result.m} ${result.e}`
} else {
  outcomeString = `Player Two wins! ${result.m} ${result.e}`
}

console.log(outcomeString)
