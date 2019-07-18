const rspalator = (rspList, rspMoto) => {

  const ptrn = ['d', 'w', 'l', 'w', 'l', 'w', 'l', 'w', 'l', 'w', 'l', 'w', 'l', 'w', 'l']

  const rspalator = (a, b) => {
    const i = ptrn.length
    const r = b - a
    if ( r >= 0) return r
    return (i + r)
  }

  const defaultList = ['paper', 'rock', 'scissors', 'lizard', 'spock', 'pen', 'sword']

  // needs a moto list for each combo. 💎 ✂ 🧻 🖖 🦎 🖋 ⚔
  const defaultMoto = [
    { w: 'draw',     l: 'draw',     m: 'it\' a draw, go again!',                     e: '⚠-♻' },
    { w: 'paper',    l: 'rock',     m: 'Paper covers rock',                          e: '🧻/💎' },
    { w: 'paper',    l: 'lizard',   m: 'Paper chokes lizard',                        e: '🧻/🦎' },
    { w: 'paper',    l: 'pen',      m: 'Paper keeps ink',                            e: '🧻/🖋' },
    { w: 'rock',     l: 'scissors', m: 'Rock blunts scissors',                       e: '💎/✂' },
    { w: 'rock',     l: 'spock',    m: 'Rock bashes Spocks skull',                   e: '💎/🖖' },
    { w: 'rock',     l: 'sword',    m: 'Rock blocks sword',                          e: '💎/⚔' },
    { w: 'scissors', l: 'lizard',   m: 'Scissors snip lizard',                       e: '✂/🦎' },
    { w: 'scissors', l: 'pen',      m: 'Scissors trim quill',                        e: '✂/🖋' },
    { w: 'scissors', l: 'paper',    m: 'Scissors give paper a cut',                  e: '✂/🧻' },
    { w: 'lizard',   l: 'spock',    m: 'Lizard poisons Spock',                       e: '🦎/🖖' },
    { w: 'lizard',   l: 'sword',    m: 'Lizard acid melts sword',                    e: '🦎/⚔' },
    { w: 'lizard',   l: 'rock',     m: 'Lizard eats rock',                           e: '🦎/💎' },
    { w: 'spock',    l: 'pen',      m: 'Spock bins pen, uses computer',              e: '🖖/🖋' },
    { w: 'spock',    l: 'paper',    m: 'Spock disproves paper',                      e: '🖖/🧻' },
    { w: 'spock',    l: 'scissors', m: 'Spock finds scissors illogical',             e: '🖖/✂' },
    { w: 'pen',      l: 'sword',    m: 'The pen is mightier than the sword',         e: '🖋/⚔' },
    { w: 'pen',      l: 'rock',     m: 'Pen fences rock in',                         e: '🖋/💎' },
    { w: 'pen',      l: 'lizard',   m: 'Pen impales lizard',                         e: '🖋/🦎' },
    { w: 'sword',    l: 'paper',    m: 'Sword slashes paper',                        e: '⚔/🧻' },
    { w: 'sword',    l: 'scissors', m: 'The sword is mightier than the scissor',     e: '⚔/✂' },
    { w: 'sword',    l: 'spock',    m: 'Sword slices slashes stabs, silences Spock', e: '⚔/🖖' }
  ]

  if (rspList == [] || rspList == undefined) rspList = defaultList
  if (rspMoto == [] || rspMoto == undefined) rspMoto = defaultMoto

  // Three payers? even numberes lists?
  const haveAGo = (p1, p2) => {
    let idx1 = rspList.indexOf(p1)
    let idx2 = rspList.indexOf(p2)
    let r = ptrn[rspalator(idx1, idx2)]

    if (r == 'd') return { w: 'draw', l: 'draw', m: rspMoto.filter(i => i.w == 'draw')[0].m }

    let w = ''
    let l = ''
    let m = ''

    if (r == 'w') {
      w = 'p1'
      l = 'p2'
      m = rspMoto.filter(i => i.w == p1 && i.l == p2)[0]
    }

    if (r == 'l') {
      w = 'p2'
      l = 'p1'
      m = rspMoto.filter(i => i.l == p1 && i.w == p2)[0]
    }

    if (m != undefined) {
      if (w == 'p1') {
        return { w: p1, l: p2, m: m.m, e: m.e }
      } else {
        return { w: p2, l: p1, m: m.m, e: m.e }
      }

    } else {
      if (w == 'p1') {
        return { w: p1, l: p2, m: '' }
      } else {
        return { w: p2, l: p1, m: '' }
      }
    }
  }

  return {
    haveAGo
  }
}

// node export for use in node projects. Not needed for browser projects.
if (typeof process != undefined) { exports.rspalator = rspalator }
