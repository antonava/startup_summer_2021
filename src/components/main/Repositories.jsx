import { useSelector  } from 'react-redux';
import ReactPaginate from 'react-paginate';

const Repositories = () => {
  const { user } = useSelector(state => state.user);
  const { repositories } = useSelector(state => state.repositories);
 
  // ReactPaginate
  // const PER_PAGE = 4;
  // const pageCount = Math.ceil(repositories.length / PER_PAGE);
  // // смещение
  // const [offset, setOffset] = useState(1);
  // // надо сохранить состояние
  // const currentPageData = repositories.slice(offset - 1, offset - 1 + PER_PAGE);
  // // console.log(currentPageData);
  // // console.log('Pagination', currentPageData);
  // // console.log("pageCount", pageCount)
  // const handlePageClick = (e) => {
  //   const selectedPage = e.selected;
  //   setOffset(selectedPage + PER_PAGE);
  // }

  return (
    <>
      <div className="repo">
        <h2 className="repo_title">Repositories {repositories.length}</h2>
        <div className="repo_info">
          {repositories.map((repository, index) => (
            <div key={index} className="repo_info-common">
              <a href={`https://github.com/${user.login}/${repository.name}`} target="_blank"><h2 className="repo_info__title">{repository.name}</h2></a>
              <p className="repo_info__description">{repository.description}</p>
              {/* {console.log("Repo name",repository.name)} */}
            </div>
          ))}
          {/* <div className="pagination-container">
            <p>{offset} - {offset + currentPageData.length - 1} of {repositories.length} items</p>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              previousLinkClassName="pagination__link"
              nextLinkClassName="pagination__link"
              disabledClassName="pagination__link--disabled"
              activeClassName="pagination__link--active"
            />
          </div> */}

        </div>
      </div>
    </>
  );
}

export default Repositories;

