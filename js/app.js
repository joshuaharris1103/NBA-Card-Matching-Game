// console.log('hello world')
document.addEventListener('DOMContentLoaded', () => {

    // Photos and their randomization
    const cardList = [{
            name: 'NBA',
            image: 'NBA_LOGOS_FOLDER/nba-logo-transparent.png'
        },
        {
            name: 'NBA',
            image: 'NBA_LOGOS_FOLDER/nba-logo-transparent.png'
        },

        {
            name: 'easternConf',
            image: 'NBA_LOGOS_FOLDER/nba-Eastern_Conference_logo.png'
        },
        {
            name: 'easternConf',
            image: 'NBA_LOGOS_FOLDER/nba-Eastern_Conference_logo.png'
        },

        {
            name: 'Knicks',
            image: 'NBA_LOGOS_FOLDER/nba-new-york-knicks-logo.png'
        },
        {
            name: 'Knicks',
            image: 'NBA_LOGOS_FOLDER/nba-new-york-knicks-logo.png'
        },
        {
            name: 'Nets',
            image: 'NBA_LOGOS_FOLDER/nba-brooklyn-nets-logo.png'
        },
        {
            name: 'Nets',
            image: 'NBA_LOGOS_FOLDER/nba-brooklyn-nets-logo.png'
        },

        {
            name: '76ers',
            image: 'NBA_LOGOS_FOLDER/nba-philadelphia-76ers-logo.png'
        },
        {
            name: '76ers',
            image: 'NBA_LOGOS_FOLDER/nba-philadelphia-76ers-logo.png'
        },

        {
            name: 'Celtics',
            image: 'NBA_LOGOS_FOLDER/nba-boston-celtics-logo.png'
        },
        {
            name: 'Celtics',
            image: 'NBA_LOGOS_FOLDER/nba-boston-celtics-logo.png'
        },

        {
            name: 'Raptors',
            image: 'NBA_LOGOS_FOLDER/nba-toronto-raptors-logo-2020.png'
        },
        {
            name: 'Raptors',
            image: 'NBA_LOGOS_FOLDER/nba-toronto-raptors-logo-2020.png'
        },
        {
            name: 'Game Ball',
            image: 'NBA_LOGOS_FOLDER/nba-spalding-basketball.png'
        },
        {
            name: 'Game Ball',
            image: 'NBA_LOGOS_FOLDER/nba-spalding-basketball.png'
        }
    ]
    cardList.sort(() => 0.5 - Math.random())
    // console.log(cardList)

    const board = document.querySelector('.gameBoard')
    const attemptsHolder = document.querySelector('.attempts')
    const foundHolder = document.querySelector('.finds')
    // const timeHolder = document.querySelector('.timer')
    const gameButton = document.getElementById('#start')
    // const resetButton = document.querySelector('#reset')
    const gameCards = 8

    let attempts = 0
    let foundCards = 0
    // let timer = setInterval(function() {})
    attemptsHolder.textContent = attempts
    foundHolder.textContent = foundCards
    // timeHolder.textContent = timer


    let selectedCards = []
    let selectedCardsIds = []
    
    // startGame = () => {
    //     for (let i=0; i < cardList.length; i++)
        
    //     gameButton.addEventListener('click', initiateBoard)
    //     // let time = setInterval(() => {
            
    //     // }, 1000)
    //     // gametimer doesnt start until play is hit
    //     // play button
    
    // initiateBoard()
    // }
    
    initiateBoard = () => {
        for (let i = 0; i < cardList.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'NBA_LOGOS_FOLDER/basket.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
            
        }
    }
    

    flipCard = (e) => {
        if (selectedCards.length !== 2) {
            let cardId = e.target.getAttribute('data-id')
            console.log(e.target.getAttribute('src'))
            if (e.target.getAttribute('src') !== 'NBA_LOGOS_FOLDER/blank.png') {
                selectedCards.push(cardList[cardId].name)
                selectedCardsIds.push(cardId)
                e.target.setAttribute('src', cardList[cardId].image)
                if (selectedCards.length == 2) {
                    setTimeout(checkMatches, 400)
                }
            }
        }
    }
    

    checkMatches = () => {
        attempts++
        let cards = document.querySelectorAll('img')
        let firstCard = selectedCardsIds[0]
        let secondCard = selectedCardsIds[1]
        if (selectedCards[0] == selectedCards[1]) {
            foundCards++
            cards[firstCard].setAttribute('src', 'NBA_LOGOS_FOLDER/blank.png')
            cards[secondCard].setAttribute('src', 'NBA_LOGOS_FOLDER/blank.png')
        } else {
            cards[firstCard].setAttribute('src', 'NBA_LOGOS_FOLDER/basket.png')
            cards[secondCard].setAttribute('src', 'NBA_LOGOS_FOLDER/basket.png')
        }
        selectedCards = []
        selectedCardsIds = []
        attemptsHolder.textContent = (`${attempts}`)
        foundHolder.textContent = (`${foundCards}`)
        // timeHolder.textContent = 
        if (foundCards == gameCards) {
            alert('completed')
        }
    }

    

    gameOver = () => {

    }

    // resetBoard = () => {

    // }

initiateBoard()
    // resetButton.addEventListener('click', resetBoard)
})