console.log('country roads?')
const button = document.querySelector('button')
button.style.visibility = 'hidden'
setTimeout(() => {
  button.style.visibility = 'visible'
}, 100)
button.className = 'animated heartBeat score'
//////FOOTER//////
const footer = document.querySelector('footer')
const scoreBoard = document.createElement('div')
scoreBoard.classList.add('scoreboard')
footer.append(scoreBoard)

const scoreCells = document.createElement('div')
scoreCells.classList.add('scorecells')
footer.append(scoreCells)

const scoreCell1 = document.createElement('div')
scoreCell1.classList.add('cell1')
scoreCell1.classList.add('cell')
scoreCells.append(scoreCell1)
const scoreCell2 = document.createElement('div')
scoreCell2.classList.add('cell2')
scoreCell2.classList.add('cell')
scoreCells.append(scoreCell2)
const scoreCell3 = document.createElement('div')
scoreCell3.classList.add('cell3')
scoreCell3.classList.add('cell')
scoreCells.append(scoreCell3)

const topRow = document.createElement('div')
topRow.classList.add('toprow')
scoreBoard.append(topRow)
const world = document.createElement('div')
world.classList.add('world')
const p = document.createElement('div')
p.classList.add('p')
const scoreCount = document.createElement('div')
scoreCount.classList.add('scorecount')
topRow.append(world)
topRow.append(p)
topRow.append(scoreCount)

scoreCount.innerText = '🟡 0'
world.innerText = 'WORLD 8'
p.innerText = 'ᐅ ᐅ ᐅ ᐅ ᐅ ᐅ ᐅ P'

const bottomRow = document.createElement('div')
bottomRow.classList.add('bottomrow')
scoreBoard.append(bottomRow)
const lives = document.createElement('div')
lives.classList.add('lives')
const numbers = document.createElement('div')
numbers.classList.add('numbers')
const timeDisplay = document.createElement('div')
timeDisplay.classList.add('timedisplay')
bottomRow.append(lives)
bottomRow.append(numbers)
bottomRow.append(timeDisplay)

lives.innerText = 'M x 001'
numbers.innerText = '4 2 0 6 9 6 9'
timeDisplay.innerText = '🕒 100'
