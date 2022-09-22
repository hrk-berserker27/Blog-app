import React from "react";
import styles from "../styles/Form.module.css";
const Form:React.FC = ()=> {
    return(
        <div className={styles.formContainer}>
          <form method='post' className={styles.form}>
          <label className={styles.label}>
            John
            <input type="text" name="first_name" className={styles.input}/>
          </label>
          <label className={styles.label}>
            Doe
            <input type="text" name="last_name" className={styles.input}/>
          </label>
          <label htmlFor="" className={styles.label}>
            johndoe@gmail.com
            <input type="email" className={styles.input} />
          </label>
          <label htmlFor="" className={styles.label}>
            kdjfd134lfdlj
            <input type="password" className={styles.input} />
          </label>
          <input type="submit" className={styles.submit}/>
          </form>
        </div>
    )
}
export default Form;