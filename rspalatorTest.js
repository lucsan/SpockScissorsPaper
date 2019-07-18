const rsp = require('./rspalator.js')

const allCombos = (list, rspa) => {
  list.map(l1 => {
    list.map(l2 => {
      let m = rspa.haveAGo(l1, l2)
      if (m.m == '') {
        console.log(`${m.w} Wins!, ${m.w} beats ${m.l}`)
      } else {
        console.log(`${m.w} Wins! ${m.m}`)
      }

    })
  })
}


let list = ['paper', 'rock', 'scissors', 'lizard', 'spock', 'pen', 'sword']
const r = rsp.rspalator()
allCombos(list, r)


list = ['archers', 'infantory', 'cavalry']
const r2 = rsp.rspalator(list)
allCombos(list, r2)
