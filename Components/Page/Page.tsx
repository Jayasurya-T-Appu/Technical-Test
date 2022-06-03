import * as React from 'react';
import Table from '../Table/Table';
const Page: any = ({
  lists,
  loading,
  totalData,
  dataPerPage,
  paginate,
  currentPage,
  setDataPerPage,
  setCureentPage,
}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <Table
        lists={lists}
        totalData={totalData}
        dataPerPage={dataPerPage}
        paginate={paginate}
        currentPage={currentPage}
        setDataPerPage={setDataPerPage}
        setCureentPage={setCureentPage}
      />
    </div>
  );
};

export default Page;
