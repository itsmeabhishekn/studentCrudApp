import { Injectable,NotFoundException } from "@nestjs/common";
import { Student } from "./student.mode";

@Injectable()
export class StudentsService {

    private students: Student[] = [];

    insertStudent(name: string, rollnumber: number, department: string, email: string, phonenumber: number, place: string, semester: number) {
        const newStudent = new Student(name, rollnumber, department, email, phonenumber, place, semester)
        this.students.push(newStudent);
        return rollnumber
    }

    getStudents() {
        return [...this.students];
    }

    getSingleStudent(rollnumber:number) {
        
        const student = this.students.find((stud)=> stud.rollnumber == rollnumber);
        if(!student)
        {
            throw new NotFoundException('could not found student');
        }
        else{
            return {...student};
        }
        
    }


}