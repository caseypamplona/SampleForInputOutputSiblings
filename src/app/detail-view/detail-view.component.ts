import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  name: string;
  nickname: string;
  @Output() newStudent = new EventEmitter<Student>();
  @Input() student: Student;
  constructor() { }

  ngOnInit() {
  }

  addStudent(){
    this.newStudent.emit(new Student(this.name, this.nickname));
    this.name = '';
    this.nickname = '';
  }

}
