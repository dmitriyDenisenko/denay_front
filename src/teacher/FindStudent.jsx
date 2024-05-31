import '../styles/main_styles.css';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Api } from "../api/Api.js";

function FindTeacher() {
    const [teachers, setTeachers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const teachersPerPage = 5;

    const fetchTeachers = async () => {
        const teacherData = await Api.getAllTeachers();
        setTeachers(teacherData);
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const filteredTeachers = teachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastTeacher = currentPage * teachersPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
    const currentTeachers = filteredTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

    const totalPages = Math.ceil(filteredTeachers.length / teachersPerPage);

    return (
        <div className="welcome">
            <Link to="/student" className="arrow"><FaArrowLeft size={30} color={"black"} /></Link>
            <div>
                <p className="text">Поиск преподавателей</p>
            </div>
            <input
                type="text"
                placeholder="Введите имя преподавателя"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search_input"
            />
            <div className="teachers_table">
                {currentTeachers.map((teacher) => (
                    <Link to={`/teacher/${teacher.id}`} key={teacher.id} className="teacher_link">
                        <div className="teacher">
                            <div className="teacher_text">{teacher.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`page_button ${index + 1 === currentPage ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FindTeacher;