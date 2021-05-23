import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchUserInfo } from '../../actions/user';
import { fetchRepositories } from '../../actions/repositories';
import { SearchIcon } from '../icons/search';
import { GitHubIcon } from '../icons/github_logo';

const Header = ({ userName, setUserName }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(fetchUserInfo(userName));
      dispatch(fetchRepositories(userName));
    }
  };

  return (
    <nav className="nav">
      <GitHubIcon />
      <form className="nav_search" onKeyPress={handleKeyPress}>
        <div className="nav_search__img">
          <SearchIcon />
        </div>
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
};

export default Header;
