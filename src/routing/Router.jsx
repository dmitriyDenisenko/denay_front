import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "../login/Login.jsx";
import Student from "../student/Student.jsx";
import Teacher from "../teacher/Teacher.jsx";
import Disciplines from "../student/Disciplines.jsx";
import Modules from "../student/Modules.jsx";
import FindTeacher from "../student/FindTeacher.jsx";
import TeacherDetail from "../teacher/TeacherDetail.jsx";
import Dean from "../dean/Dean.jsx";
import Admin from "../admin/Admin.jsx";
import CreateNewAdmin from "../admin/CreateNewAdmin.jsx";
import WelcomePage from "../components/welcome/WelcomePage.jsx";
import LoginPage from "../components/login/LoginPage.jsx";
import AdminPage from "../components/admin/AdminPage.jsx";
import CreateNewAdminPage from "../components/admin/CreateNewAdminPage.jsx";
import CreateNewDeanPage from "../components/admin/CreateNewDeanPage.jsx";
import DeanPage from "../components/dean/DeanPage.jsx";
import CreateNewStudentPage from "../components/dean/CreateNewStudentPage.jsx";
import CreateNewTeacherPage from "../components/dean/CreateNewTeacherPage.jsx";
import CreateNewDisciplinePage from "../components/dean/CreateNewDisciplinePage.jsx";
import AddGradePage from "../components/dean/AddGradePage.jsx";
import AddSubjectToTeacherPage from "../components/dean/AddSubjectToTeacherPage.jsx";
import AddSubjectToStudentPage from "../components/dean/AddSubjectToStudentPage.jsx";
import StudentPage from "../components/student/StudentPage.jsx";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />


            <Route path="/student" element={<StudentPage />} />

            <Route path="/student/disciplines" element={<Disciplines />} />
            <Route path="/student/modules" element={<Modules />} />
            <Route path="/student/teachers" element={<FindTeacher />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/teacher/:id" element={<TeacherDetail />} />



            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/admin/create_admin" element={<CreateNewAdminPage/>} />
            <Route path="/admin/create_dean" element={<CreateNewDeanPage/>} />
            <Route path="/dean" element={<DeanPage/>} />
            <Route path="/dean/create_student" element={<CreateNewStudentPage/>} />
            <Route path="/dean/create_teacher" element={<CreateNewTeacherPage/>} />
            <Route path="/dean/create_discipline" element={<CreateNewDisciplinePage/>} />
            <Route path="/dean/create_grade" element={<AddGradePage/>} />
            <Route path="/dean/add_to_teacher" element={<AddSubjectToTeacherPage/>} />
            <Route path="/dean/add_to_student" element={<AddSubjectToStudentPage/>} />

            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
}

export default Router;