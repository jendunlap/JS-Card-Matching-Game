const board = document.querySelector('.board')
const cardBack = '<img src="https://i.imgur.com/ywruWIz.jpg">'
const cards = [
  // { name: 'coin10', html: '<img src = "https://i.imgur.com/E7dMsON.jpeg">' },
  // { name: 'coin20', html: '<img src = "https://i.imgur.com/krrXWfU.jpeg">' },
  // { name: 'flower', html: '<img src = "https://i.imgur.com/rUjl6lP.jpeg">' },
  // { name: 'life', html: '<img src="https://i.imgur.com/T5hg4TQ.jpeg">' },
  { name: 'mushroom', html: '<img src="https://i.imgur.com/G08DFIg.jpeg">' },
  { name: 'star', html: '<img src="https://i.imgur.com/daLHV0t.jpeg">' }
]
let randomCards = []
let firstCard = null
let secondCard = null
let firstDiv = null
let secondDiv = null
let score = 0
// let lock = false

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
  cardDiv.classList.add('back')
  board.append(cardDiv)
  cardDiv.addEventListener('click', () => flipCard(cardDiv, card))
})

const flipCard = (div, card) => {
  // if (lock) return
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
      // lock = true
      compareCard()
      declareWin()
    }
  }
}

const compareCard = () => {
  if (firstCard === secondCard) {
    score++
    firstCard = null
    secondCard = null
    console.log(score)
  } else {
    setTimeout(() => {
      firstDiv.innerHTML = cardBack
      secondDiv.innerHTML = cardBack
    }, 500)
    firstCard = null
    secondCard = null
  }
}

const declareWin = () => {
  if (score === randomCards.length / 2) {
    console.log('win!')
  }
}
declareWin()
