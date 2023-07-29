import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLogin from './headerLogin';
import HeaderProfile from './headerProfile';

const Header: React.FC = () => {
  const location = useLocation();

  const isRootPath = location.pathname === '/';
  const isProfilePath = location.pathname === '/profile';

  return (
    <div>
      {isRootPath && <HeaderLogin />}
      {isProfilePath && <HeaderProfile />}
    </div>
  );
};

export default Header;