import React from 'react';

import { PersonIcon } from '../icons/person';

const NoUserPage = () => (
    <div className="user-not-found">
      <PersonIcon />
      <p className="user-not-found_title">User not found</p>
    </div>
);

export default NoUserPage;
