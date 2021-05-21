import repo from '../image/repo.svg';

const RepoNotFound = () => {
  return (
    <div className="repoNotFound">
      <img src={repo} alt="Repo" className="repoNotFound_img" />
      <p className="repoNotFound_title">Repository list is empty</p>
    </div>
  );
}

export default RepoNotFound;