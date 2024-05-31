import main_styles from '../syles_modules/welcome.module.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";

function CreateNewDeanPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Разделение ФИО на имя, фамилию и отчество
        const [firstName, surname, patronymic] = fullName.split(' ');

        // Проверка полей
        if (!firstName || !surname || !patronymic || !email || !phone) {
            alert('Все поля обязательны для заполнения.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Неверный формат email.');
            return;
        }

        if (!/^\d{10,15}$/.test(phone)) {
            alert('Неверный формат телефона.');
            return;
        }

        // Подготовка данных
        const payload = {
            name: firstName,
            surname: surname,
            lastname: patronymic,
            phone: phone,
            email: email,
        };

        // Получение токена из локального хранилища
        const token = localStorage.getItem('token');

        if (!token) {
            alert('Токен не найден. Пожалуйста, войдите заново.');
            return;
        }

        // Отправка запроса
        try {
            const response = await fetch('http://localhost:8787/dean', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert('Учетная запись декана успешно добавлена.');
            } else {
                alert('Не удалось добавить учетную запись декана.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при добавлении учетной записи декана.');
        }
    };

    return (
        <div className={main_styles.welcome}>
            <Link to={"/admin"} className={main_styles.back_button}><FaArrowLeft size={30} color={"black"} /></Link>
            <div className="form-header">
                <p className={main_styles.text_create}>Добавить учетную запись декана</p>
            </div>
            <form className="create-admin-form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="ФИО"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="create-admin-input"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="create-admin-input"
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="ТЕЛЕФОН"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="create-admin-input"
                    />
                </div>
                <button type="submit" className={main_styles.buttons_create}>ДОБАВИТЬ</button>
            </form>
        </div>
    );
}

export default CreateNewDeanPage;