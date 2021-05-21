import UserInfo from './UserInfo';
import InitialState from '../InitialState';
import UserNotFound from '../UserNotFound';
import Repositories from './Repositories';
import RepositoriesNotFound from '../RepositoriesNotFound';

import { CircularProgress } from '@material-ui/core';

import { useSelector } from 'react-redux';

const Main = ({ userName }) => {
  const { user } = useSelector(state => state.user);
  const { repositories } = useSelector(state => state.repositories);
  const isPending = useSelector(state => state.isPending);

  if (user === null) {
    return <InitialState />
  }

  //!!!change the condition!!!
  if (user.message === 'Not Found') {
    return <UserNotFound />
  }

  return (
    <div className="user-table">
      <UserInfo />
      {isPending && <CircularProgress className="progress-bar" />}
      {(repositories.length === 0) ? <RepositoriesNotFound /> : <Repositories />}
    </div>
  );
}

export default Main;