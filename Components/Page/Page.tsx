import * as React from 'react';
import Table from '../Table/Table';
const Page: any = ({ lists, loading }) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <Table lists={lists} />
    </div>
  );
};

export default Page;
