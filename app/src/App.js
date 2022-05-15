import React from 'react';
import Header from './components/header/header';
import useApi from './components/hooks/useApi';
import Paginate from './components/paginate/paginate';
import './App.css';
import 'antd/dist/antd.min.css';

function App() {
  const { data, setQuery, loading, setpageNumber, pageNumber } = useApi();

  return (
    <>
      <Header setQuery={setQuery} loading={loading} />
      {!loading && data && (
        <Paginate
          pageCount={data?.response?.total_pages}
          setpageNumber={setpageNumber}
          pictures={data?.response?.results}
          pageNumber={pageNumber}
        />
      )}
    </>
  );
}

export default App;
