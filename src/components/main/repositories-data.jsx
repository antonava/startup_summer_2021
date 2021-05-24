import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const RepositoriesData = () => {
  const { user } = useSelector(state => state.user);
  const { repositories } = useSelector(state => state.repositories);

  // ReactPaginate
  const [pageNumber, setPageNumber] = useState(0);
  const repositoriesPerPage = 4;
  const pageCount = Math.ceil(repositories.length / repositoriesPerPage);
  const pagesVisited = pageNumber * repositoriesPerPage;
  const displayRepositories = repositories.slice(pagesVisited, pagesVisited + repositoriesPerPage);

  const changePage = (e) => {
    const selectedPage = e.selected;

    setPageNumber(selectedPage);
  };

  return (
    <>
      <div className="repo">
        <h2 className="repo_title">Repositories {repositories.length}</h2>
        <div className="repo_info">
          {displayRepositories.map((repository, index) => (
            <div key={index} className="repo_info-common">
              <a href={`https://github.com/${user.login}/${repository.name}`} target="_blank" rel="noreferrer">
                <h2 className="repo_info__title">{repository.name}</h2>
              </a>
              <p className="repo_info__description">{repository.description}</p>
            </div>
          ))}
          <div className="pagination-container">
            {/* <p>{pagesVisited + 1} - {pagesVisited + repositoriesPerPage - 1} of {repositories.length} items</p> */}
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              pageRangeDisplayed={repositoriesPerPage}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              onPageChange={changePage}
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

