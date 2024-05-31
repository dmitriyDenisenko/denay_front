import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Api } from "../api/Api.js";
import { FaArrowLeft } from "react-icons/fa";

function TeacherDetails() {
    const { id } = useParams();
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchTeacher = async () => {
        const teacherData = await Api.getTeacherById(id);
        setTeacher(teacherData);
        setLoading(false);
    };

    useEffect(() => {
        fetchTeacher();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!teacher) {
        return <div>No data available</div>;
    }

    return (
        <div className="welcome">
            <Link to="/student/teachers" className="arrow"><FaArrowLeft size={30} color={"black"} /></Link>
            <div>
                <p className="text">{`Иванов Иван Иванович(препод)`}</p>
                <p className="date">{teacher.date}</p>
            </div>
            <div className="schedule">
                {teacher.schedule && teacher.schedule.length > 0 ? (
                    teacher.schedule.map((item, index) => (
                        <div key={index} className="schedule_item">

                        </div>
                    ))
                ) : (
                    <div>Физика 8:20</div>
                )}
            </div>
        </div>
    );
}

export default TeacherDetails;