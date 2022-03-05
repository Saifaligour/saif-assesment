/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

interface PaginationIntr {
  row?: string | number;
  pgno?: string | number;
  total: string | number;
  forword: (pgno: string | number) => void;
  backword: (pgno: string | number) => void;
  pageLimit: (row: string | number) => void;
}

const Pagination: React.FC<PaginationIntr> = ({
  row = 25,
  pgno = 1,
  total,
  forword,
  backword,
  pageLimit,
}: any) => {
  const [page, setPage] = useState(pgno);
  // const [limit, setLimit] = useState(row);
  const forwordPage = () => {
    if (pgno < Math.ceil(total / row)) {
      forword(page + 1);
      setPage(page + 1);
    }
  };

  const backwordPage = () => {
    if (page > 1) {
      backword(page - 1);
      setPage(page - 1);
    }
  };
  const pageLimits = ({ target }: any) => {
    pageLimit(target.value);
  };
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div className="showing">
          Showing &nbsp;
          <select className="showChoose" onChange={pageLimits}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          &nbsp; entries per page
        </div>
      </div>
      <div className="col-lg-6 col-md-6	">
        <div className="cust-pagination">
          <div className="float-end">
            Showing <span>{pgno}</span> result(s) for <span>{total}</span> of{' '}
            <span>{Math.ceil(total / row) || 1}</span> page(s)
            <a
              className={pgno === 1 ? ' Disabled' : ' '}
              onClick={backwordPage}
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a
              className={pgno >= Math.ceil(total / row) ? ' Disabled' : ''}
              onClick={forwordPage}
            >
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
