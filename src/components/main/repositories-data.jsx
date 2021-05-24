/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import Pagination from '@material-ui/lab/Pagination';
import ReactPaginate from 'react-paginate';

const RepositoriesData = () => {
  const { user } = useSelector(state => state.user);
  const { repositories } = useSelector(state => state.repositories);

  // ReactPaginate
  const PER_PAGE = 4;
  const pageCount = Math.ceil(repositories.length / PER_PAGE);
  // // смещение
  const [offset, setOffset] = useState(1);

  // // надо сохранить состояние
  const currentPage = repositories.slice(offset - 1, offset - 1 + PER_PAGE);
  const [data, setData] = useState(currentPage);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;

    setOffset(selectedPage + PER_PAGE);
    setData(data);
  };

  return (
    <>
      <div className="repo">
        <h2 className="repo_title">Repositories {repositories.length}</h2>
        <div className="repo_info">
          {data.map((repository, index) => (
            <div key={index} className="repo_info-common">
              <a href={`https://github.com/${user.login}/${repository.name}`} target="_blank" rel="noreferrer">
                <h2 className="repo_info__title">{repository.name}</h2>
              </a>
              <p className="repo_info__description">{repository.description}</p>
            </div>
          ))}
          {/* <Pagination count={pageCount} color="primary" shape="rounded"/> */}
          <div className="pagination-container">
            <p>{offset} - {offset + data.length - 1} of {repositories.length} items</p>
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              pageRangeDisplayed={PER_PAGE}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              previousLinkClassName="pagination__link"
              nextLinkClassName="pagination__link"
              disabledClassName="pagination__link--disabled"
              activeClassName="pagination__link--active"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RepositoriesData;

