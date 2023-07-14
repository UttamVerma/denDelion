import styles from "./Signup.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

let Signup=()=>{
    return(
        <>
        <Navbar/>
        <div className={styles.signupparent}>
            <h2 className={styles.hithere}>Hi There!</h2>
            <div >
                <p className={styles.para}>SignIn Or SignUp</p>
            </div>
            <div >
                <input className={styles.inputsignup} type="text"  placeholder="E-Mail*"/>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Signup;