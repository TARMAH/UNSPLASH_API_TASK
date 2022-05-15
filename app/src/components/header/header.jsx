import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const header = ({ setQuery, loading }) => {
  const [value, setvalue] = useState('');
  return (
    <>
      <Search
        className="searchBar"
        placeholder="input search text"
        size="large"
        value={value}
        onChange={e => setvalue(e.target.value)}
        loading={loading}
        onSearch={() => setQuery(value)}
        enterButton={'Search'}
      />
    </>
  );
};

export default header;
