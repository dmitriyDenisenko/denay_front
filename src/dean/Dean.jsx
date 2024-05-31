import '../styles/main_styles.css'
import {Link} from "react-router-dom";

function Dean() {
  return (
    <div className={"welcome"}>
        <div>
            <p className={"text"}>ДЕКАН</p>
        </div>
        <Link className="choose_button" to={"/teacher"}>ДОБАВИТЬ УЧЕТНУЮ ЗАПИСЬ СТУДЕНТА</Link>
        <Link className={"choose_button"} to={"/teacher"}>ДОБАВИТЬ УЧЕТНУЮ ЗАПИСЬ ПРЕПОДОВАТЕЛЯ</Link>
        <Link className={"choose_button"} to={"/teacher"}>ДОБАВИТЬ ПРЕДМЕТ</Link>
        <Link className={"choose_button"} to={"/teacher"}>ВЫСТАВИТЬ ОЦЕНКИ</Link>
        <Link className={"choose_button"} to={"/teacher"}>ДОБАВИТЬ ПРЕДМЕТ СТУДЕНТУ</Link>
        <Link className={"choose_button"} to={"/teacher"}>ДОБАВИТЬ ПРЕДМЕТ ПРЕПОДОВАТЕЛЮ</Link>
        <Link className={"choose_button"} to={"/teacher"}>ИЗМЕНИТЬ ЛЮБУЮ СУЩНОСТЬ</Link>
    </div>
  )
}

export default Dean
