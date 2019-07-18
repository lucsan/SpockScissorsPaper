# 🎲 Spock Scissors Paper - 🖖✂🧻

#### 💎 ✂ 🧻 🖖 🦎 🖋 ⚔

Spock Scissors Paper (rpsalator) is an amusing variant on the traditional game of rock scissors paper .

While the original game can be traced back to 17th Centaury China this variant takes
the Big Bang Theory modification - rock scissors paper spock lizard, then, rspalator adds 2 more;
pen and sword.

Spock scissors paper has default values for rock, scissors, paper, Spock, lizard, pen and sword, however you
can send it any series and it will produce a rsp matrix.

Its operation is simple:

send it 2 items from the list and it calculates the winner (or a draw) and returns the result.

When you instantiate the rspalator you can also pass a custom list and custom moto.

For example:

```javascript
['archers', 'cavalry', 'infantry']
```

Each item beats the item to its immediate right, thus; archers beat cavalry, cavalry beat infantry and infantry beat archers.

In a longer sequence each beats the item to its immediate right, then alternate ones.

```javascript
['monkey', 'donkey', 'elephant', 'mongoose', 'snake']
```

In this sequence monkey beats donkey, looses to elephant, beats mongoose and looses to snake.

You can also send a moto results matrix, or run the results against and external matrix.

For example:-

```javascript
['fruit', 'meat', 'nuts']

[
  { w: 'fruit', l: 'meat',  m: 'Fruit sweetens meat', e:'🍌/🥩' },
  { w: 'meat',  l: 'nuts',  m: 'Meat softens nuts'    e:'🥩/🥜' },
  { w: 'nuts',  l: 'fruit', m: 'Nuts crunch fruit'    e:'🥜/🍌' },
]
```
Well probably not a fruit, meat, nuts based one, but you get the idea.

####_use_
 `var rsp = require('./rspalator.js')` to include in your node project, or `<script src="rspalator.js"></script>` to include in a browser side script.

Either way rspalator is referenced `var ssp = rspalator(list, motos)` to instantiate, (you do not need to send list and motos if your using the defaults).

Play is invoked with `ssp.haveAGo(player one's choice, player two's choice)` where the 2 choices are items from the list.
