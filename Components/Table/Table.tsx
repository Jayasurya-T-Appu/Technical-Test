import * as React from 'react';
import './Table.css';
import Row from '../Row/Row';
import Pagination from '../../Components/Pagination/Pagination';
const Table: any = ({
  lists,
  currentPage,
  dataPerPage,
  totalData,
  paginate,
  setDataPerPage,
}) => {
  const [isActive, setIsActive] = React.useState(false);

  const onClickHandle = (e) => {
    setDataPerPage(e.target.textContent);
    setIsActive(!isActive);
  };
  return (
    <div className="table__Container">
      <div className="table__Button__Container">
        <div>
          <div
            onClick={() => setIsActive(!isActive)}
            className="table__Button__Wrapper"
          >
            <p>Page Limit</p>
          </div>
          {isActive && (
            <div className="table__button_items">
              <p onClick={onClickHandle}>10</p>
              <p onClick={onClickHandle}>20</p>
              <p onClick={onClickHandle}>30</p>
              <p onClick={onClickHandle}>50</p>
            </div>
          )}
        </div>
      </div>
      <div className="table__Content">
        <div className="table__header">
          <h3>Date Checked</h3>
          <h3>Positive</h3>
          <h3>Negative</h3>
          <h3>Hospitalized</h3>
        </div>
        <div className="table__body">
          {lists.map((list, index) => {
            return <Row key={index} list={list} />;
          })}
        </div>
      </div>
      <Pagination
        dataPerPage={dataPerPage}
        totalData={totalData}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;
