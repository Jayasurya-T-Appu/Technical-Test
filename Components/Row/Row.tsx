import * as React from 'react';
import './Row.css';
const Row: any = ({ list }) => {
  console.log(list);
  return (
    <div className="list__Container">
      <p>{list.dateChecked}</p>
      <p>{list.positive}</p>
      <p>{list.negative}</p>
      <p>{list.hospitalized}</p>
    </div>
  );
};

export default Row;
