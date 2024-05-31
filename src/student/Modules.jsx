import '../styles/main_styles.css'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Api } from "../api/Api.js";

function Modules() {

    const [modules, setModules] = useState([]);
    const fetchModules = async () => {
        const disciplinesData = await Api.getModulesById();
        setModules(disciplinesData);
    };

    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <div className={"welcome"}>
            <Link to={"/student"} className="arrow"><FaArrowLeft size={30} color={"black"} /></Link>
            <div>
                <p className={"text"}>Список модулей</p>
            </div>

            <div className="disciplines_table">
                <div className="table_header">
                    <div className="modules_name header_item">Предмет</div>
                    <div className="modules_info header_item">М1</div>
                    <div className="modules_info header_item">М2</div>
                    <div className="modules_info header_item">К</div>
                    <div className="modules_info header_item">З</div>
                    <div className="modules_info header_item">Э</div>
                </div>
                {modules.map((discipline) => (
                    <div className="disciplines" key={discipline.id}>
                        <div className="disciplines_text">{discipline.name}</div>
                        <div className="disciplines_info">{discipline.firstModule}</div>
                        <div className="disciplines_info">{discipline.secondModule}</div>
                        <div className="disciplines_info">{discipline.coursework !== null ? discipline.coursework : 'X'}</div>
                        <div className="disciplines_info">{discipline.offset !== null ? discipline.offset : 'X'}</div>
                        <div className="disciplines_info">{discipline.exam !== null ? discipline.exam : 'X'}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Modules;
