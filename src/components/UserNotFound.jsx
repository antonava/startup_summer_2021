import person from '../image/person.svg';

const UserNotFound = () => {
  return (
    <div className="userNotFound">
      <img src={person} alt="Person" className="userNotFound_img" />
      <p className="userNotFound_title">User not found</p>
    </div>
  );
}

export default UserNotFound;