import * as React from 'react';
import './Table.css';
import Row from '../Row/Row';
const Table: any = ({ lists }) => {
  return (
    <div className="table__Container">
      <div className="table__Content">
        <div className="table__header">
          <h3>Date Checked</h3>
          <h3>Positive</h3>
          <h3>Negative</h3>
          <h3>Hospitalized</h3>
        </div>
        <div className="table__body">
          {lists.map((list) => {
            return <Row list={list} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
