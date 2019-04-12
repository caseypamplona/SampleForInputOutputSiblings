import { Component } from '@angular/core';
import { Student } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'communication';
  currentStudent: Student; 
  newStudent: Student;

  
  setStudent(event){
    this.currentStudent = event;
  }

  acceptStudent(student){
    this.newStudent = student;
  }
}
