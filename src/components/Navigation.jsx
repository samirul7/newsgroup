import styles from './Navigation.module.css'
function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.logo}>logo</li>
        <li>Articles</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navigation
