import search from '../image/search.svg';

const InitialState = () => {
  return (
    <div className="initial-state">
      <img src={search} alt="Search" className="initial-state_img" />
      <p className="initial-state_title">Start with searching a GitHub user</p>
    </div>
  );
}

export default InitialState;