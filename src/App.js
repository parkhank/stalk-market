import React from 'react';
import './App.scss';
import Tracks from './components/Tracks';
import Buy from './components/Buy';
// import Score from './components/Score';

const turnipTrack = [1, 2, 3, 4, 5, 6, 8, 10];
const celeryTrack = [2, 3, 3, 4, 5, 5, 6, 7];
const onionTrack = [3, 3, 3, 4, 4, 5, 5, 5];

const turnipDice = [-7, -4, -1, 1, 4, 7];
const celeryDice = [-2, -2, -1, 1, 2, 2];
const onionDice = [-1, -1, 0, 0, 1, 1];

const rollDice = () => {
  return Math.floor(Math.random() * 6);
}

class App extends React.Component {

state = {
  positions: { turnips: 3, celery: 3, onions: 3 },
  money: 20,
  fridge: { turnips: 0, celery: 0, onions: 0 },
  round: 1,
}

spendHandler = spent => {
  this.setState({
    money: this.state.money - spent
  })
}

fridgeHandler = veggies => {
  this.setState({
    fridge: { turnips: veggies.turnips, celery: veggies.celery, onions: veggies.onions },
    round: this.state.round + 1
  })
}

rollDiceHandler = () => {
  this.setState({
    positions: {
      turnips: turnipTrack[rollDice()],
      celery: celeryTrack[rollDice()],
      onions: onionTrack[rollDice()]
    }
  })
}

sellHandler = () => {
  console.log(this.state.fridge.turnips * turnipTrack[this.state.positions.turnips])
  let dividends = (
    this.state.fridge.turnips * turnipTrack[this.state.positions.turnips]
    + this.state.fridge.celery * celeryTrack[this.state.positions.celery]
    + this.state.fridge.onions * onionTrack[this.state.positions.onions]
  )
  this.setState({
    money: this.state.money + dividends
  })
}

componentDidUpdate(prevProps, prevState) {
  return (
    (prevState.round !== this.state.round)
      ? this.sellHandler()
      : null
  )
}

render() {
  return (
    <div className="app">
      <h1 className="app__header">Stalk Market</h1>
      <Tracks positions={this.state.positions}/>
      <Buy
        turnipPrice={turnipTrack[this.state.positions.turnips]}
        celeryPrice={celeryTrack[this.state.positions.celery]}
        onionPrice={onionTrack[this.state.positions.onions]}
        spendHandler={this.spendHandler}
        rollDiceHandler={this.rollDiceHandler}
        fridgeHandler={this.fridgeHandler}
        sellHandler={this.sellHandler}/>
      <p>Fridge: {this.state.fridge.turnips} {this.state.fridge.celery} {this.state.fridge.onions}</p>
      {
        (this.state.round > 5)
        ? <p>Final score: {this.state.money}</p>
        : <p>Money left: {this.state.money}</p>
      }
    </div>
  );
}

}

export default App;
