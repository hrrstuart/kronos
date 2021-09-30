import React from 'react';
import '../css/Card.css';

import ICard from '../types/ICard';

function Card(props: ICard) {
  return (
      <div className="card">
          <header>
              <h1 className="card-title">{props.title}</h1>
              <p className="card-text">{props.text}</p>
          </header>
      </div>
  );
}

export default Card;