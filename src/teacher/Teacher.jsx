import '../styles/main_styles.css'
import {Link} from "react-router-dom";

function Teacher() {
  return (
    <div className={"welcome"}>
        <div>
            <p className={"text"}>ПРЕПОДОВАТЕЛЬ</p>
        </div>
        <Link className="choose_button" to={"/teacher"}>ПОСМОТРЕТЬ СПИСОК ПРЕДМЕТОВ</Link>
        <Link className={"choose_button"} to={"/teacher"}>ВЫСТАВИТЬ ОТМЕТКУ</Link>
        <Link className={"choose_button"} to={"/teacher"}>ИНФОРМАЦИЯ О СТУДЕНТАХ</Link>
    </div>
  )
}

export default Teacher
