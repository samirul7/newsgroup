import styles from './UserProfile.module.css'

const user = {
  name: 'Md Samirul Islam',
  email: 'test@test.com',
  pwd: 'test_test',
}

function UserProfile() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.name}>Name: {user.name}</p>
        <p className={styles.email}>Email: {user.email}</p>
      </div>
    </div>
  )
}

export default UserProfile
