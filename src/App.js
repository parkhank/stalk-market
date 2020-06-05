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
      <div className="app__header">
        <h1 className="app__header--purple">S</h1>
        <h1 className="app__header--green">T</h1>
        <h1 className="app__header--yellow">A</h1>
        <h1 className="app__header--purple">L</h1>
        <h1 className="app__header--green">K</h1>
        <h1 className="app__header--space"> </h1>
        <h1 className="app__header--yellow">M</h1>
        <h1 className="app__header--purple">A</h1>
        <h1 className="app__header--green">R</h1>
        <h1 className="app__header--yellow">K</h1>
        <h1 className="app__header--purple">E</h1>
        <h1 className="app__header--green">T</h1>
      </div>
      <Tracks positions={this.state.positions}/>
      <div className="info">
        <Buy className="info__left"
          turnipPrice={turnipTrack[this.state.positions.turnips]}
          celeryPrice={celeryTrack[this.state.positions.celery]}
          onionPrice={onionTrack[this.state.positions.onions]}
          spendHandler={this.spendHandler}
          rollDiceHandler={this.rollDiceHandler}
          fridgeHandler={this.fridgeHandler}
          sellHandler={this.sellHandler}/>
        <div className="info__right">
          {
            (this.state.round > 5 )
          ? <div className="info__round">Game Over!</div>
          : <div className="info__round">Round: {this.state.round}</div>
          }
          {
            (this.state.round > 5)
            ? <p className="info__score">Final score: {this.state.money}</p>
            : <p className="info__score">Money left: {this.state.money}</p>
          }
        </div>
      </div>
    </div>
  );
}

}

export default App;
