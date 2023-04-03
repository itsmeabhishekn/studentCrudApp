import { Body, Controller, Post,Get,Param } from "@nestjs/common";
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
}