import * as React from 'react';
import './style.css';
import Page from './Components/Page/Page';
import Pagination from './Components/Pagination/Pagination';

export default function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCureentPage] = React.useState(1);
  const [dataPerPage, setDataPerPage] = React.useState(10);
  React.useEffect(() => {
    fetchData();
  }, []);
  const paginate = (number) => setCureentPage(number);

  //Getting Current list
  const indexOfLastList = currentPage * dataPerPage;
  const indexOfFirstList = indexOfLastList - dataPerPage;
  const currestList = data.slice(indexOfFirstList, indexOfLastList);

  const fetchData = async () => {
    const Url = 'https://api.covidtracking.com/v1/us/daily.json';
    setLoading(true);
    const response = await fetch(Url);
    const result = await response.json();
    setData(result);
    setLoading(false);
  };
  return (
    <div>
      <Page
        lists={currestList}
        loading={loading}
        currentPage={currentPage}
        dataPerPage={dataPerPage}
        totalData={data.length}
        paginate={paginate}
        setDataPerPage={setDataPerPage}
      />
    </div>
  );
}
