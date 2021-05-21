import { useSelector } from 'react-redux';

import img1 from '../../image/followers.svg';
import img2 from '../../image/following.svg';


const UserInfo = () => {
  const { user } = useSelector(state => state.user);

  return (
    <div className="userInfo-container">
      <div className="userInfo">
        <div className="userInfo_photo">
          <img src={user.avatar_url} alt={user.name} className="user_photo" />
        </div>
        <div className="userInfo_name">{user.name}</div>
        <div className="userInfo_login"><a href={`https://github.com/${user.login}`} target="_blank">{user.login}</a></div>
        <span className="userInfo_followers"><img src={img1} alt="followers" /> {user.followers} followers</span>
        <span className="userInfo_following"><img src={img2} alt="following" /> {user.following} following</span>
      </div>
    </div>
  );
}

export default UserInfo;