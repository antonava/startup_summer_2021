import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../actions/user';
import { fetchRepositories } from '../../actions/repositories';

import logo from '../../image/github_logo.svg';
import search from '../../image/search.svg';

const Header = ({ userName, setUserName}) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserName(e.target.value)
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(fetchRepositories(userName));
      dispatch(fetchUserInfo(userName));
    }
  };


  return (
    <nav className="nav">
      <img src={logo} alt="github" className="nav_logo" />
      <form className="nav_search" onKeyPress={handleKeyPress}>
        <img src={search} alt="search" className="nav_search__img" />
        <input
          type="text"
          className="nav_search__input"
          placeholder="Enter GitHub username"
          value={userName}
          onChange={handleChange}
        />
      </form>
    </nav>
  );
}

export default Header;