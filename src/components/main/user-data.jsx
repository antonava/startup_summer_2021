import React from 'react';
import { useSelector } from 'react-redux';

import { FollowersIcon } from '../icons/followers';
import { FollowingIcon } from '../icons/following';

const UserData = () => {
  const { user } = useSelector(state => state.user);

  return (
    <div className="user-info-container">
      <div className="user-info">
        <div className="user-info_photo">
          <img src={user.avatar_url} alt={user.name} className="user_photo" />
        </div>
        <div className="user-info_name">{user.name}</div>
        <div className="user-info_login">
          <a href={`https://github.com/${user.login}`} target="_blank" rel="noreferrer">{user.login}</a>
        </div>
        <span className="user-info_followers">
          <FollowersIcon />
          {(user.followers > 1e4) ? `${(user.followers / 1000).toFixed(1)}k followers` : `${user.followers} followers`}
        </span>
        <span className="user-info_following">
          <FollowingIcon />
          {(user.following > 1e4) ? `${(user.following / 1000).toFixed(1)}k following` : `${user.following} following`}
        </span>
      </div>
    </div>
  );
};

export default UserData;
