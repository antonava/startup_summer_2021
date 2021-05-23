/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { PersonIcon } from '../icons/person';

const NoUserPage = () => (
    <div className="userNotFound">
      <PersonIcon />
      <p className="userNotFound_title">User not found</p>
    </div>
);

export default NoUserPage;
