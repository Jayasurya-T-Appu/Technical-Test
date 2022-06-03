import * as React from 'react';
import './Pagination.css';
const Pagination: any = ({ totalData, dataPerPage, paginate, currentPage }) => {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }

  const onHandleChange = (number) => {
    paginate(number);
  };

  let indexOfcurrent = pageNumber.indexOf(currentPage);
  var prev = [null];
  prev =
    currentPage < 5
      ? pageNumber.slice(0, currentPage - 1)
      : pageNumber.slice(indexOfcurrent - 5, indexOfcurrent);
  /* if (currentPage > 5) {
    prev = pageNumber.slice(indexOfcurrent - 5, indexOfcurrent);
    console.log('prev', prev);
  } */
  console.log('prev', prev);

  let next = pageNumber.slice(indexOfcurrent + 1, indexOfcurrent + 6);
  console.log('next', next);
  let totalPage = prev.concat(currentPage, next);
  console.log(totalPage);

  const setActive = () => {};
  return (
    <div className="Pagination__Container">
      <div className="Pagination__wraper">
        <ul>
          {totalPage.map((number) => {
            return (
              <li onClick={() => onHandleChange(number)} key={number}>
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
