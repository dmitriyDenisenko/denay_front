import '../styles/main_styles.css'
import {Link} from "react-router-dom";

function Admin() {
  return (
    <div className={"welcome"}>
        <div>
            <p className={"text"}>ADMIN</p>
        </div>
        <Link className="choose_button" to={"/admin/create_admin"}>ДОБАВИТЬ УЧЕТНУЮ ЗАПИСЬ АДМИНА</Link>
        <Link className={"choose_button"} to={"/teacher"}>ДОБАВИТЬ УЧЕТНУЮ ЗАПИСЬ ПРЕПОДОВАТЕЛЯ</Link>
        <Link className={"choose_button"} to={"/teacher"}>ДОБАВИТЬ УЧЕТНУЮ ЗАПИСЬ ДЕКАНА</Link>
        <Link className={"choose_button"} to={"/teacher"}>СМЕНА ПАРОЛЯ ДЕКАНА </Link>
        <Link className={"choose_button"} to={"/teacher"}>СМЕНА ПАРОЛЯ СТУДЕНТА </Link>
    </div>
  )
}

export default Admin
