import React from 'react';

import { SearchIcon } from '../icons/search';

const StartPage = () => (
    <div className="initial-state">
      <div className="initial-state_img">
        <SearchIcon />
      </div>
      <p className="initial-state_title">Start with searching a GitHub user</p>
    </div>
);

export default StartPage;
