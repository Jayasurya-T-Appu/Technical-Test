import * as React from 'react';
import './Row.css';
const Row: any = ({ list }) => {
  return (
    <div
      className={
        list.positive < 100 ? 'list__Container active' : 'list__Container'
      }
    >
      <p>{list.dateChecked.slice(0, 10)}</p>
      <p>{list.positive}</p>
      <p>{list.negative}</p>
      <p>{list.hospitalized}</p>
    </div>
  );
};

export default Row;
