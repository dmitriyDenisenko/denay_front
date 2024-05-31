import main_styles from '../syles_modules/welcome.module.css'
import {Link} from "react-router-dom";

function DeanPage() {
  return (
    <div className={"welcome"}>
        <div>
            <p className={main_styles.text_create}>ДЕКАН</p>
        </div>
        <Link className={main_styles.choose_button} to={"/dean/create_student"}>ДОБАВИТЬ УЧЕТНУЮ ЗАПИСЬ СТУДЕНТА</Link>
        <Link className={main_styles.choose_button} to={"/dean/create_teacher"}>ДОБАВИТЬ УЧЕТНУЮ ЗАПИСЬ ПРЕПОДОВАТЕЛЯ</Link>
        <Link className={main_styles.choose_button} to={"/dean/create_discipline"}>ДОБАВИТЬ ПРЕДМЕТ</Link>
        <Link className={main_styles.choose_button} to={"/dean/create_grade"}>ВЫСТАВИТЬ ОЦЕНКИ</Link>
        <Link className={main_styles.choose_button} to={"/dean/add_to_student"}>ДОБАВИТЬ ПРЕДМЕТ СТУДЕНТУ</Link>
        <Link className={main_styles.choose_button} to={"/dean/add_to_teacher"}>ДОБАВИТЬ ПРЕДМЕТ ПРЕПОДОВАТЕЛЮ</Link>

    </div>
  )
}

export default DeanPage
