import { Body, Controller, Post,Get,Param, Patch,Delete } from "@nestjs/common";
import { StudentsService } from "./students.service";

@Controller('students')
export class StudentsController {

    constructor(private readonly studentService: StudentsService) { }

    @Post()
    addStudent(
        @Body('name') name: string,
        @Body('rollnumber') rollnumber: number,
        @Body('department') department: string,
        @Body('email') email: string,
        @Body('phonenumber') phonenumber: number,
        @Body('place') place: string,
        @Body('semester') semester: number
    ) {
        const generatedId = this.studentService.insertStudent(name, rollnumber, department, email, phonenumber, place, semester)
        return generatedId;
    }

    @Get()
    getAllStudents(
    ){
        return this.studentService.getStudents();
    }

    @Get(':rollnumber')
    getStudent(@Param('rollnumber') rollnumber:number)
    {
        return this.studentService.getSingleStudent(rollnumber);
    }

    @Patch(':rollnumber')
    updateStudent(
        @Body('name') name: string,
        @Param('rollnumber') rollnumber: number,
        @Body('department') department: string,
        @Body('email') email: string,
        @Body('phonenumber') phonenumber: number,
        @Body('place') place: string,
        @Body('semester') semester: number
    ){
        this.studentService.updateStudent(name,rollnumber,department,email,phonenumber,place,semester)
        return null;
    }

    @Delete(':rollnumber')
    deleteStudent(@Param('rollnumber') rollnumber:number){
        this.studentService.deleteStudent(rollnumber);
        return null;
    }

}