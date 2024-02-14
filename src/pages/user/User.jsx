import styles from './User.module.css'
import UserProfile from './UserProfile'

function User() {
  return (
    <div className={styles.container}>
      <div className={styles.newsgroup}>
        <div>Subscribed</div>
        <div>Unsubscribed</div>
      </div>
      <div className={styles.userProfile}>
        <UserProfile />
      </div>
    </div>
  )
}

export default User
