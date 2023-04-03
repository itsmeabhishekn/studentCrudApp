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
        
        const student = this.findStudent(rollnumber)[0]
            return {...student};
        
    }

    updateStudent(name: string, rollnumber: number, department: string, email: string, phonenumber: number, place: string, semester: number){

        const [student,index] = this.findStudent(rollnumber)
        const updateStudent = {...student}

        if(name){
            updateStudent.name=name;
        }
        if(department){
            updateStudent.department=department;
        }
        if(email){
            updateStudent.email=email;
        }
        if(phonenumber){
            updateStudent.phonenumber=phonenumber;
        }
        if(place){
            updateStudent.place=place;
        }
        if(semester){
            updateStudent.semester=semester
        }

        this.students[index]=updateStudent;

    }

    deleteStudent(rollnumber:number){
        const index = this.findStudent(rollnumber)[1];
        this.students.splice(index,1);
    }

    private findStudent(rollnumber:number) : [Student , number]{
        const studentIndex = this.students.findIndex((stud)=> stud.rollnumber == rollnumber);
        const student = this.students[studentIndex]
        if(!student)
        {
            throw new NotFoundException('could not found student');
        }
        return [student,studentIndex]
    }


}