// src/components/Login.jsx
import '../styles/main_styles.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (token && role) {
            navigateToRolePage(role);
        }
    }, [navigate]);

    const handleLoginChange = (e) => setLogin(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const scopes = ['ADMIN', 'DEAN', 'STUDENT', 'TEACHER'];

    const navigateToRolePage = (role) => {
        switch (role) {
            case 'ADMIN':
                navigate('/admin');
                break;
            case 'DEAN':
                navigate('/dean');
                break;
            case 'STUDENT':
                navigate('/student');
                break;
            case 'TEACHER':
                navigate('/teacher');
                break;
            default:
                navigate('/'); // Фallback на случай неизвестной роли
        }
    };

    const handleSubmit = async () => {
        try {
            for (const scope of scopes) {
                try {
                    const response = await axios.post('http://localhost:9191/oauth2/token', new URLSearchParams({
                        grant_type: 'client_credentials',
                        client_id: login,
                        client_secret: password,
                        scope: scope
                    }), {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });

                    if (response.status === 200 && response.data && response.data.access_token) {
                        const { access_token } = response.data;
                        localStorage.setItem('token', access_token);
                        localStorage.setItem('role', scope);
                        navigateToRolePage(scope);
                        return; // Завершаем выполнение после первого успешного запроса
                    }
                } catch (error) {
                    // Обработка ошибки запроса для текущего scope, продолжаем проверку других scope
                    console.error(`Error during authentication with scope ${scope}`, error);
                }
            }

            alert('Authentication failed for all scopes');
        } catch (error) {
            console.error('Error during authentication', error);
            alert('An error occurred during authentication');
        }
    };

    return (
        <div className="welcome">
            <div>
                <p className="text">ВХОД</p>
            </div>
            <div className="div_flex">
                <input
                    type="text"
                    placeholder="ЛОГИН"
                    value={login}
                    onChange={handleLoginChange}
                />
                <input
                    type="password"
                    placeholder="ПАРОЛЬ"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button className="buttons" onClick={handleSubmit}>Далее</button>
        </div>
    );
}

export default Login;
