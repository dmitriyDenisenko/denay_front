import main_styles from '../syles_modules/welcome.module.css'
import {Link} from "react-router-dom";

function AdminPage() {
  return (
    <div className={main_styles.welcome}>
        <div>
            <p className={main_styles.text}>Администратор</p>
        </div>
        <Link className={main_styles.choose_button} to={"/admin/create_admin"}>ДОБАВИТЬ УЧЕТНУЮ ЗАПИСЬ АДМИНА</Link>
        <Link className={main_styles.choose_button} to={"/admin/create_dean"}>ДОБАВИТЬ УЧЕТНУЮ ЗАПИСЬ ДЕКАНА</Link>
        {/*<Link className={main_styles.choose_button} to={"/teacher"}>СМЕНА ПАРОЛЯ ДЕКАНА </Link>*/}
        {/*<Link className={main_styles.choose_button} to={"/teacher"}>СМЕНА ПАРОЛЯ СТУДЕНТА </Link>*/}
    </div>
  )
}

export default AdminPage
