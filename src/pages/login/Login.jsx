import styles from './Login.module.css'

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <form className={styles.form}>
          <div className={styles.titleContainer}>
            <h4>Login</h4>
          </div>
          <div className={styles.gridLayout}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
            <label htmlFor='pwd'>Password</label>
            <input type='password' name='pwd' id='pwd' />
          </div>
          <div className={styles.login__footer}>
            <button className={styles.loginButton}>Login</button>
            <p className={styles.footer__text}>
              Don&apos;t have an account?
              <br /> Click <button className={styles.btn_text}> Here</button> to
              Sign Up.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
