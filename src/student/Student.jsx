import '../styles/main_styles.css'
import {Link} from "react-router-dom";

function Student() {
  return (
    <div className={"welcome"}>
        <div>
            <p className={"text"}>СТУДЕНТ</p>
        </div>
        <Link className="choose_button" to={"/student/disciplines"}>ПОСМОТРЕТЬ СПИСОК ПРЕДМЕТОВ</Link>
        <Link className={"choose_button"} to={"/student/modules"}>ПОСМОТРЕТЬ СПИСОК МОДУЛЕЙ</Link>
        <Link className={"choose_button"} to={"/student/teachers"}>ПОСМОТРЕТЬ РАСПИСАНИЕ ПРЕПОДАВАТЕЛЕЙ</Link>
    </div>
  )
}

export default Student
