import React from 'react';
import './Buy.scss';

class Buy extends React.Component {

state = {
  turnipNum: '',
  celeryNum: '',
  onionNum: '',
  turnipAmt: 0,
  celeryAmt: 0,
  onionAmt: 0,
  totalAmt: 0,
}

turnipChange = e => {
  this.setState({ turnipNum: e.target.value })
}
celeryChange = e => {
  this.setState({ celeryNum: e.target.value })
}
onionChange = e => {
  this.setState({ onionNum: e.target.value })
}

buttonHandler = e => {
  e.preventDefault();
  this.props.spendHandler(this.state.totalAmt);
  this.props.rollDiceHandler();
  this.props.fridgeHandler({
    turnips: (this.state.turnipNum || 0),
    celery: (this.state.celeryNum || 0),
    onions: (this.state.onionNum || 0),
  })
  this.setState({
    turnipNum: '',
    celeryNum: '',
    onionNum: '',
  })
}

componentDidUpdate(prevProps, prevState) {
  return (
    <>
    {
    (this.state.turnipNum !== prevState.turnipNum)
      ? this.setState({ 
        turnipAmt: this.state.turnipNum * this.props.turnipPrice,
      })
      : null
    }
    {
    (this.state.celeryNum !== prevState.celeryNum)
      ? this.setState({ 
        celeryAmt: this.state.celeryNum * this.props.celeryPrice,
      })
      : null
    }
    {
    (this.state.onionNum !== prevState.onionNum)
      ? this.setState({ 
        onionAmt: this.state.onionNum * this.props.onionPrice,
      })
      : null
    }
    {
    (this.state.turnipAmt !== prevState.turnipAmt
      || this.state.celeryAmt !== prevState.celeryAmt
      || this.state.onionAmt !== prevState.onionAmt)
      ? this.setState({
        totalAmt: this.state.turnipAmt + this.state.celeryAmt + this.state.onionAmt
      })
      : null
    }
    </>
  )
}

render() {
  return (
    <div className="buy">
      <form className="buy__form" onSubmit={this.buttonHandler}>
        <div className="buy__left">
          <h2 className="buy__header">Buy:</h2>
          <div className="buy__input">
            <input
              className="buy__turnipInput"
              type="text"
              value={this.state.turnipNum || ''} onChange={this.turnipChange}/>
            <p className="buy__turnipOutput">{this.state.turnipAmt}</p>
          </div>
          <div className="buy__input">
            <input
              className="buy__celeryInput"
              type="text"
              value={this.state.celeryNum || ''} onChange={this.celeryChange}/>
            <p className="buy__celeryOutput">{this.state.celeryAmt}</p>
          </div>
          <div className="buy__input">
            <input
              className="buy__onionInput"
              type="text"
              value={this.state.onionNum || ''} onChange={this.onionChange}/>
            <p className="buy__onionOutput">{this.state.onionAmt}</p>
          </div>
        </div>
        <div className="buy__right">
          <p className="buy__total">{this.state.totalAmt}</p>
          <button className="buy__button">Stalk Up!</button>
        </div>
      </form>
    </div>
  )
}

}

export default Buy;