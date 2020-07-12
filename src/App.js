import React, { Component } from 'react'
import Card from './components/Card'
import Wrapper from './components/Wrapper'
import Score from './components/Scoreboard'
import cards from './cards.json'
import './App.css'

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedCardIds: [],
    score: 0,
    goal: 6,
    status: ''
  }

  //shuffle the cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedCardIds = this.state.clickedCardIds

    if (clickedCardIds.includes(id)) {
      this.setState({
        clickedCardIds: [],
        score: 0,
        status: 'Game Over! Try Again! Click to play again!'
      })
      return
    } else {
      clickedCardIds.push(id)

      if (clickedCardIds.length === 6) {
        this.setState({
          score: 6,
          status: 'You Won! You Know Your Stuff! Click to play again!',
          clickedCardIds: []
        })
        console.log('You Win')
        return
      }

      this.setState({
        cards,
        clickedCardIds,
        score: clickedCardIds.length,
        status: ' '
      })

      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[cards[i], cards[j]] = [cards[j], cards[i]]
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render () {
    return (
      <div className='app'>
        <header className='header'>
          <p className='intro'>
            Click on different Owl House Characters, don't click on the same one
            twice or you lose!
          </p>
        </header>
        <Score total={this.state.score} goal={6} status={this.state.status} />
        <Wrapper>
          {this.state.cards.map(owlhouse => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={owlhouse.id}
              image={owlhouse.image}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App
