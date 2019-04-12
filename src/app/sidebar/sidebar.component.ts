import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
@Input() set newStudent(value) {
  if(value){
    this.students.push(value);
  }
}
  @Output() selectedStudent: EventEmitter<Student> = new EventEmitter<Student>();
  students: Student[];
  constructor() { }

  ngOnInit() {
    this.students = [
      new Student('cassandra','casey'),
      new Student('ok','whatever'),
    ]
  }

  sendToChild(student){
    this.selectedStudent.emit(student);
  }

}

export class Student {
  constructor(name, nickname){
    this.name = name;
    this.nickname = nickname;
  }
  name: string;
  nickname: string;
}