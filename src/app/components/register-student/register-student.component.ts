import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent {
  formulaire = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl(null, Validators.required),
    gender: new FormControl('', Validators.required),
    courseFee: new FormControl(null, Validators.required),
  })
  @Output() evenement : EventEmitter<Student> = new EventEmitter();

  createStd(){
    if(this.formulaire.valid && this.formulaire.value.dateOfBirth){
      let str : string;
      if(this.formulaire.value.gender == "Male"){
        str = "https://www.w3schools.com/howto/img_avatar.png"
      }
      else{
        str = "https://www.w3schools.com/howto/img_avatar2.png"
      }
      const student : Student = {
        id: 'std101',
        name: String(this.formulaire.value.name),
        dateOfBirth: new Date(this.formulaire.value.dateOfBirth),
        gender: String(this.formulaire.value.gender),
        coursFee: Number(this.formulaire.value.courseFee),
        picture:str
      };
      this.formulaire.reset();
      this.evenement.emit(student);
    }
  }
}
