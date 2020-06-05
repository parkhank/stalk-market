import React from 'react';
import './App.scss';
import Tracks from './components/Tracks';

const fillerPositionData = { turnips: 3, celery: 3, onions: 3 };

class App extends React.Component {

render() {
  return (
    <div className="app">
      <h1 className="app__header">Stalk Market</h1>
      <Tracks positions={fillerPositionData}/>
    </div>
  );
}

}

export default App;
