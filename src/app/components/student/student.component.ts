import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentsComponent } from '../students/students.component';
//import { Student } from './model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})


export class StudentComponent {
  @Input() std : Student | undefined;
  @Output() evenement : EventEmitter<Student> = new EventEmitter();
  
  supprEtudiant() : void{
    console.log("TOTO");
    this.evenement.emit(this.std);
  }
}

