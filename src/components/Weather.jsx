import React from 'react';


export default class Weather extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="weather--info--card card">
          <div className="city--weather--info">
            <h1>...</h1>
            <div className="weather__icon">
              <i className="wi wi-day-sunny display-1" />
            </div>
            <div className="weather--temps min-max">
              {minMaxTemp(25, 18)}
            </div>
            <div className="weather__description">
              <h3>Slow Rain</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function minMaxTemp(max, min) {
  return (
    <h2>
      <span className="min-temp">
        {min}
        &deg;
      </span>
      <span className="max-temp">
        {max}
        &deg;
      </span>
    </h2>
  );
}
