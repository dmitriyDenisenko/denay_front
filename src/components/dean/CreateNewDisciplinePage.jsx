import main_styles from '../syles_modules/welcome.module.css'
import {Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";

function CreateNewDisciplinePage() {


    const handleSubmit = async (event) => {

        // Получение токена из локального хранилища
        const token = localStorage.getItem('token');

        if (!token) {
            alert('Токен не найден. Пожалуйста, войдите заново.');
            return;
        }

        // Отправка запроса
        try {
            alert('Предмет успешно добавлен.');
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при добавлении предмета.');
        }
    };

    return (
        <div className={main_styles.welcome}>
            <Link to={"/dean"} className={main_styles.back_button}><FaArrowLeft size={30} color={"black"}/></Link>
            <div className="form-header">
                <p className={main_styles.text_create}>Добавить Пердмет</p>
            </div>
            <form className="create-admin-form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Название"
                        className="create-admin-input"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Преподаватель"
                        className="create-admin-input"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Курс"
                        className="create-admin-input"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Группа"
                        className="create-admin-input"
                    />
                </div>
                <button type="submit" className={main_styles.buttons_create}>ДОБАВИТЬ</button>
            </form>
        </div>
    );
}

export default CreateNewDisciplinePage;