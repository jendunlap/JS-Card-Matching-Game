console.log(`Country roads`)
console.log(`Let's a-gooooo`)
console.log("It's a-meeeeee")
console.log('MARIOOOOOOOOO!!!!!')

const board = document.querySelector('.board')
const cardBack = '<img src = https://i.imgur.com/ywruWIz.jpg>'
const cards = [
  // { name: 'coin10', html: '<img src = https://i.imgur.com/E7dMsON.jpeg>' },
  // { name: 'coin20', html: '<img src = https://i.imgur.com/krrXWfU.jpeg>' },
  // { name: 'flower', html: '<img src = https://i.imgur.com/rUjl6lP.jpeg>' },
  { name: 'life', html: '<img src = https://i.imgur.com/T5hg4TQ.jpeg>' },
  { name: 'mushroom', html: '<img src = https://i.imgur.com/G08DFIg.jpeg>' },
  { name: 'star', html: '<img src = https://i.imgur.com/daLHV0t.jpeg>' }
]

let randomCards = []

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
  board.append(cardDiv)
  cardDiv.addEventListener('click', () => {
    if ((cardDiv.innerHTML = cardBack)) {
      cardDiv.innerHTML = card.html
      cardDiv.c
    }
  })
})

// let createBoard = () => {
//   let newDiv1 = document.createElement('div')
//   newDiv1.innerHTML = cardBack
//   board.append(newDiv1)
//   newDiv1.addEventListener('click', () => {
//     if ((newDiv1.innerHTML = cardBack)) {
//       newDiv1.innerHTML = randomCards[0].html
//     }
//   })
//   let newDiv2 = document.createElement('div')
//   newDiv2.innerHTML = cardBack
//   board.append(newDiv2)
//   newDiv2.addEventListener('click', () => {
//     if ((newDiv2.innerHTML = cardBack)) {
//       newDiv2.innerHTML = randomCards[1].html
//     }
//   })
//   let newDiv3 = document.createElement('div')
//   newDiv3.innerHTML = cardBack
//   board.append(newDiv3)
//   newDiv3.addEventListener('click', () => {
//     if ((newDiv3.innerHTML = cardBack)) {
//       newDiv3.innerHTML = randomCards[2].html
//     }
//   })
//   let newDiv4 = document.createElement('div')
//   newDiv4.innerHTML = cardBack
//   board.append(newDiv4)
//   newDiv4.addEventListener('click', () => {
//     if ((newDiv4.innerHTML = cardBack)) {
//       newDiv4.innerHTML = randomCards[3].html
//     }
//   })
//   let newDiv5 = document.createElement('div')
//   newDiv5.innerHTML = cardBack
//   board.append(newDiv5)
//   newDiv5.addEventListener('click', () => {
//     if ((newDiv5.innerHTML = cardBack)) {
//       newDiv5.innerHTML = randomCards[4].html
//     }
//   })
//   let newDiv6 = document.createElement('div')
//   newDiv6.innerHTML = cardBack
//   board.append(newDiv6)
//   newDiv6.addEventListener('click', () => {
//     if ((newDiv6.innerHTML = cardBack)) {
//       newDiv6.innerHTML = randomCards[5].html
//     }
//   })
// }
// createBoard()
