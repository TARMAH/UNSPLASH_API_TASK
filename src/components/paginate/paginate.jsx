import React from 'react';
import { Pagination } from 'antd';
import { PER_PAGE } from '../utils/searchPhotos';
import Pics from '../pics/pics';
import './paginate.css';

function paginate({ pageCount, pictures, pageNumber, setpageNumber }) {
  // Invoke when user click to request another page.
  const handlePageClick = current => {
    setpageNumber(current);
  };

  return (
    <>
      <Pics pictures={pictures} />
      <Pagination
        className="Pagination"
        defaultCurrent={1}
        total={pageCount * PER_PAGE}
        current={pageNumber}
        onChange={handlePageClick}
        showSizeChanger={false}
      />
    </>
  );
}

export default paginate;
