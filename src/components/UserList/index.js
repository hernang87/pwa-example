import UserListItem from '@components/UserListItem'
import styles from './index.scss';

export default (props) => {
  const users = props.users.map(user => <UserListItem user={user} />);
  return (
    <div className={styles.container}>
      { users }
    </div>
  );
}