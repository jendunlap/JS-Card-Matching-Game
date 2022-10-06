//TODO?
//array of correctly guessed cards
//query selector all for cells set inner html of cell to same index of completed array
// possibly use for each
//search reg x sometime
//flip the cards to the back again when the game is over
//maybe don't reload page and count how many times won
//function to reset page but not reload

const board = document.querySelector('.board')
const cardBack = '<img src="https://i.imgur.com/yWY6Uw9.jpg">'
const scoreCards = [
  {
    name: 'mushroomscore',
    html: '<img src ="https://i.imgur.com/4aESqHN.jpg">'
  },
  { name: 'flowerscore', html: '<img src ="https://i.imgur.com/w9bcqXV.jpg">' },
  { name: 'starscore', html: '<img src ="https://i.imgur.com/Fd0xeUO.jpg">' }
]

const cards = [
  { name: 'coin10', html: '<img src = "https://i.imgur.com/Cxgymyh.jpg">' },
  { name: 'coin20', html: '<img src = "https://i.imgur.com/QH03oU9.jpg">' },
  { name: 'life', html: '<img src="https://i.imgur.com/SzE1NRM.jpg">' },
  { name: 'flower', html: '<img src = "https://i.imgur.com/hMpSUju.jpg">' },
  { name: 'mushroom', html: '<img src="https://i.imgur.com/UTtJ9Pf.jpg">' },
  { name: 'star', html: '<img src="https://i.imgur.com/Pt3VRv6.jpg">' },
  { name: 'flower', html: '<img src = "https://i.imgur.com/hMpSUju.jpg">' },
  { name: 'mushroom', html: '<img src="https://i.imgur.com/UTtJ9Pf.jpg">' },
  { name: 'star', html: '<img src="https://i.imgur.com/Pt3VRv6.jpg">' }
]

const matchSound = new Audio(
  'https://www.myinstants.com/en/instant/coin-mario/?utm_source=copy&utm_medium=share'
)

let randomCards = []
let firstCard = null
let secondCard = null
let firstDiv = null
let secondDiv = null
let score = 0
let lock = false

let gameTimer = 100
let timer = setInterval(() => {
  gameTimer--
  if (gameTimer === 0) {
    clearInterval(timer)
    scoreCount.innerText = ''
    world.innerText = ''
    p.innerText = "TIME'S UP!"
    lives.innerText = ''
    numbers.innerText = 'Click to try again!'
    timeDisplay.innerText = ''
    scoreBoard.addEventListener('click', replay)
  }
  if (score === randomCards.length / 2) {
    clearInterval(timer)
  }
  if (p.innerText === 'YOU WIN!!!') {
    timeDisplay.innerText = ''
  } else {
    timeDisplay.innerText = '🕒 0' + gameTimer
  }
  if (gameTimer > 0) {
    timeDisplay.innerText = '🕒 0' + gameTimer
  } else {
    timeDisplay.innerText = ''
    lock = true
  }
}, 1000)

cards.forEach((card) => {
  randomCards.splice(
    Math.floor(Math.random() * (cards.length * 2 - 1)),
    0,
    card
  )
  randomCards.splice(
    Math.floor(Math.random() * (cards.length * 2 - 1)),
    0,
    card
  )
})

randomCards.forEach((card) => {
  let cardDiv = document.createElement('div')
  cardDiv.innerHTML = cardBack
  cardDiv.classList.add('card')
  cardDiv.classList.add('back')
  board.append(cardDiv)
  cardDiv.addEventListener('click', () => flipCard(cardDiv, card))
})

const flipCard = (div, card) => {
  if (lock) return
  if (div.innerHTML === cardBack) {
    div.innerHTML = card.html
    div.classList.remove('back')
    div.classList.add(card.name)
    div.classList.add('flipped')
    if (!firstCard) {
      firstCard = card
      firstDiv = div
    } else {
      secondCard = card
      secondDiv = div
      lock = true
      compareCard()
      declareWin()
    }
  }
}
matchSound.play()
const compareCard = () => {
  if (firstCard.name === secondCard.name) {
    lock = false
    score++
    scoreCount.innerText = '🟡 ' + score
    if (firstCard.name === 'mushroom' && secondCard.name === 'mushroom') {
      scoreCell1.innerHTML = scoreCards[0].html
    }
    if (firstCard.name === 'flower' && secondCard.name === 'flower') {
      scoreCell2.innerHTML = scoreCards[1].html
    }
    if (firstCard.name === 'star' && secondCard.name === 'star') {
      scoreCell3.innerHTML = scoreCards[2].html
    }
  } else {
    setTimeout(() => {
      firstDiv.innerHTML = cardBack
      secondDiv.innerHTML = cardBack
      lock = false
    }, 500)
  }
  firstCard = null
  secondCard = null
}

const declareWin = () => {
  if (score === randomCards.length / 2) {
    scoreCount.innerText = ''
    world.innerText = ''
    p.innerText = 'YOU WIN!!!'
    lives.innerText = ''
    numbers.innerText = 'Click to play again!'
    timeDisplay.innerText = ''
    scoreBoard.addEventListener('click', replay)
  }
}

//////FOOTER//////
const footer = document.querySelector('.footer')
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

scoreCount.innerText = '🟡 ' + score
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
timeDisplay.innerText = '🕒 ' + gameTimer
