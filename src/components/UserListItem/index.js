import styles from './index.scss';

export default (props) => {
  const { user } = props;
  const userName = `${user.first_name} ${user.last_name}`;
  return (
    <div className={styles.container}>
      <div>
        <img src={user.avatar} alt={userName} />
      </div>
      <div className={styles.name}>{userName}</div>
    </div>
  );
}