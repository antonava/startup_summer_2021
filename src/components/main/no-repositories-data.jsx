import React from 'react';
import { RepoIcon } from '../icons/repo';

const NoRepositoriesData = () => (
    <div className="repoNotFound">
      <RepoIcon />
      <p className="repoNotFound_title">Repository list is empty</p>
    </div>
);

export default NoRepositoriesData;