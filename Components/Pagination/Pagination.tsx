import * as React from 'react';
import './Pagination.css';
const Pagination: any = ({ totalData, dataPerPage, paginate, currentPage }) => {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  const [activeId, setActiveId] = React.useState(currentPage);
  const onHandleChange = (number) => {
    paginate(number);
    setActiveId(number);
  };

  let indexOfcurrent = pageNumber.indexOf(currentPage);
  var prev = [null];
  prev =
    currentPage <= 5
      ? pageNumber.slice(0, currentPage - 1)
      : pageNumber.slice(indexOfcurrent - 5, indexOfcurrent);

  let next = pageNumber.slice(indexOfcurrent + 1, indexOfcurrent + 6);

  let totalPage = prev.concat(currentPage, next);

  return (
    <div className="Pagination__Container">
      <div className="Pagination__wraper">
        <ul>
          {totalPage.map((number) => {
            return (
              <li
                className={activeId === number ? 'active' : ''}
                onClick={() => {
                  onHandleChange(number);
                }}
                key={number}
              >
                {number}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
