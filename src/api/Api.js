import {disciplines} from "./discipline/disciplines.data.js"
import {modulesData} from "./discipline/Modules.data.js";
import {teacherData} from "./discipline/Teachers.data.js";
import {teacherByIdData} from "./discipline/TeacherById.data.js";

/*
    Получение предметов GET method
 */
export const Api ={
    async getAllDisciplines () {
        return disciplines
    },

    async getModulesById(){
        return modulesData
    },
    async getAllTeachers () {
        return teacherData
    },

    async getTeacherById () {
        return teacherByIdData
    }
}
