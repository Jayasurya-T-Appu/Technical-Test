import * as React from 'react';
import './style.css';
import Page from './Components/Page/Page';

export default function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCureentPage] = React.useState(1);
  const [dataPerPage, setDataPerPage] = React.useState(10);
  React.useEffect(() => {
    fetchData();
  }, []);
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
      <Page lists={data} loading={loading} />
    </div>
  );
}
