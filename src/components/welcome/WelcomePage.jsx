import main_styles from '../syles_modules/welcome.module.css'
import {Link} from "react-router-dom";

function WelcomePage() {
  return (
    <div className={main_styles.welcome}>
        <div>
            <p className={main_styles.text}>ДОБРО ПОЖАЛОВАТЬ!</p>
        </div>
        <div>
            <Link className={main_styles.buttons} onClick={() => {}} to={"/login"}>ВХОД</Link>
        </div>
    </div>
  )
}

export default WelcomePage
