import React from 'react';

import { RepoIcon } from '../icons/repo';

const NoRepositoriesData = () => (
    <div className="repo-not-found">
      <RepoIcon />
      <p className="repo-not-found_title">Repository list is empty</p>
    </div>
);

export default NoRepositoriesData;
