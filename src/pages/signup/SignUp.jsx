import styles from './SignUp.module.css'

function SignUp() {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUp}>
        <form className={styles.form}>
          <div className={styles.titleContainer}>
            <h4>SignUp</h4>
          </div>
          <div className={styles.gridLayout}>
            <label htmlFor='name'>Full Name</label>
            <input type='text' name='name' id='name' />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
            <label htmlFor='pwd'>Password</label>
            <input type='password' name='pwd' id='pwd' />
          </div>
          <div className={styles.signUp__footer}>
            <button className={styles.signUpButton}>signUp</button>
            <p className={styles.footer__text}>
              Already have an account?
              <br /> Click <button className={styles.btn_text}> Here</button> to
              Login.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
