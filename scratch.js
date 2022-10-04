let newDiv = document.createElement('div')
let newList = document.createElement('ul')
newList.appendChild(newDiv)

function enterPlayer() {
  let player = document.getElementById('playerName')

  // let newDiv = document.createElement('div')
  // let newList = document.createElement('ul')
  let listItem = document.createElement('li')

  listItem.setAttribute('class', 'players')
  newList.innerText = 'Players:'
  listItem.innerText = player.value

  newList.appendChild(listItem)

  document.querySelector('.playerNames').appendChild(newDiv)

  players.push(player.value)

  return players
}

addPlayerButton.addEventListener('click', enterPlayer)

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

// // randomCards.forEach(() => {
// //   let createDiv = () => {
// //     let newDiv = document.createElement('div')
// //     newDiv.innerHTML =
// //     board.append(newDiv)
// //   }
// //   createDiv()
// // })

// // let randomize = () => {
// //   let index = Math.floor(Math.random() * cards.length)
// //   randomCards.push(cards[index])
// //put into randomCards
// //take out of cards
// //splice index from cards
// // }

// // let createDiv = () => {
// //   let newDiv = document.createElement('div')
// //   newDiv.innerHTML = randomCards
// //   board.append(newDiv)
// // }

// // cards.forEach(() => {
// //   createDiv()
// // })

// //math.random from random cards to innerhtml reassignment to get the whole sheband to loop
// //make grid size cards *2
// //for each item item in random cards array generate div
// //after two clicks check to see if clicked divs are ===
// //if yes, nothing, if no, flip

// // const onClick1 = () => {
// //   if (newDiv1.innerHTML !== newDiv2.innerHTML) {
// //     newDiv1.innerHTML = cardBack
// //     newDiv2.innerHTML = cardBack
// //   }
// // }
