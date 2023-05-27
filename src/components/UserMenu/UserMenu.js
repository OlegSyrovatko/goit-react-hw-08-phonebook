import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import { Button } from '../../views/ContactsView.styled';
import defaultAvatar from './default-avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
    marginLeft: 10,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};


export default function UserMenu() {
  
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authOperations.logOut());
  } 

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Wellcome, {name}</span>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}