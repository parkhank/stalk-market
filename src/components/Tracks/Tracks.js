import React from 'react';
import './Tracks.scss';
import turnipIcon from '../../assets/turnip.jpeg';
import celeryIcon from '../../assets/celery.png';
import onionIcon from '../../assets/onion.jpeg';

const Tracks = ({ positions }) => {

let { turnips, celery, onions } = positions;
const turnipTrack = [1, 2, 3, 4, 5, 6, 8, 10];
const celeryTrack = [2, 3, 3, 4, 5, 5, 6, 7];
const onionTrack = [3, 3, 3, 4, 4, 5, 5, 5];

  return (
    <div className="tracks">
      <div className="tracks__turnips">
        <h2 className="tracks__subtitle tracks__subtitle--purple">Turnips</h2>
        {
          turnipTrack.map((price, position) => {
            return (
              (position === turnips)
              ? <div className="tracks__turnipSpot">
                  <p className="tracks__turnipCurrent">{price}</p>
                  <img alt="turnip" className="tracks__turnipIcon" src={turnipIcon}/>
                </div>
              : <p className="tracks__notCurrent">{price}</p>
            )
          })
        }
      </div>
      <div className="tracks__celery">
        <h2 className="tracks__subtitle tracks__subtitle--green">Celery</h2>
        {
          celeryTrack.map((price, position) => {
            return (
              (position === celery)
              ? <div className="tracks__celerySpot">
                  <p className="tracks__celeryCurrent">{price}</p>
                  <img alt="celery" className="tracks__celeryIcon" src={celeryIcon}/>
                </div>
              : <p className="tracks__notCurrent">{price}</p>
            )
          })
        }
      </div>
      <div className="tracks__onions">
        <h2 className="tracks__subtitle tracks__subtitle--yellow">Onions</h2>
        {
          onionTrack.map((price, position) => {
            return (
              (position === onions)
              ? <div className="tracks__onionSpot">
                  <p className="tracks__onionCurrent">{price}</p>
                  <img alt="onion" className="tracks__onionIcon" src={onionIcon}/>
                </div>
              : <p className="tracks__notCurrent">{price}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tracks;