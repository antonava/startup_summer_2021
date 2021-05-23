/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { isEmpty } from 'lodash';

import UserData from './user-data';
import StartPage from './start-page';
import NoUserPage from './no-user-page';
import RepositoriesData from './repositories-data';
import NoRepositoriesData from './no-repositories-data';

const Main = () => {
  const { user } = useSelector(state => state.user);
  const { repositories } = useSelector(state => state.repositories);
  const isPendingUser = useSelector(state => state.user.isPendingUser);
  const isPendingRepositories = useSelector(state => state.repositories.isPendingRepositories);

  if (!user) {
    return <StartPage />;
  }

  if (isEmpty(user)) {
    return <NoUserPage />;
  }

  return (
    <div className="user-table">
      {isPendingUser && <CircularProgress className="progress-bar_user"/>}
      <UserData />
      {isPendingRepositories && <CircularProgress className="progress-bar_repo" />}
      {(isEmpty(repositories)) ? <NoRepositoriesData /> : <RepositoriesData />}
    </div>
  );
};

export default Main;
