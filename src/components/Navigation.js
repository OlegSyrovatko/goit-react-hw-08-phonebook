import React from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { Link } from './App.styled';
import { authSelectors } from '../redux/auth';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Link to="/">
        Home
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/contacts">
            Contacts
          </Link>

        </>
      )}
    </nav>
  );
};

export default Navigation;
