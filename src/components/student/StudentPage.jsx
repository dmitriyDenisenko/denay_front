import main_styles from '../syles_modules/welcome.module.css'
import {Link} from "react-router-dom";

function StudentPage() {
  return (
    <div className={"welcome"}>
        <div>
            <p className={main_styles.text_create}>СТУДЕНТ</p>
        </div>
        <Link className={main_styles.choose_button} to={"/student/disciplines"}>ПОСМОТРЕТЬ СПИСОК ПРЕДМЕТОВ</Link>
        <Link className={main_styles.choose_button} to={"/student/modules"}>ПОСМОТРЕТЬ СПИСОК МОДУЛЕЙ</Link>
        <Link className={main_styles.choose_button} to={"/student/teachers"}>ПОСМОТРЕТЬ РАСПИСАНИЕ ПРЕПОДАВАТЕЛЕЙ</Link>
    </div>
  )
}

export default StudentPage
