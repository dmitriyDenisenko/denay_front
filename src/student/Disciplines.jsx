import '../styles/main_styles.css'
import {FaArrowLeft} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Api} from "../api/Api.js";

function Disciplines() {

    const [disciplines, setDisciplines] = useState([]);
    const fetchDisciplines = async () => {
        const disciplinesData = await Api.getAllDisciplines();
        setDisciplines(disciplinesData);
    };

    useEffect(() => {
        fetchDisciplines();
    }, []);
    return (
    <div className={"welcome"}>
        <Link to={"/student"} className="arrow"><FaArrowLeft size={30} color={"black"} /></Link>
        <div>
            <p className={"text"}>ИВАНОВ ИВАН ИВАНОВИЧ</p>
        </div>

        <div className="disciplines_table">
            {disciplines.map((discipline) => (
                <div className="disciplines" key={discipline.id}>
                    <p className="disciplines_text">{discipline.name}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Disciplines
