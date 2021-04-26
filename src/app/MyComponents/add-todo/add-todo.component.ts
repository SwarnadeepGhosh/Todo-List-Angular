import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  //Emitting a event todoAdd, which will received by todos.component.ts and add the todo into todos Array
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {  }
  
  onSubmit() {
    const todo = {
      //sno: 8,
      //Generates random number between 1 to 10
      sno: Math.floor((Math.random() * 10) + 1),
      title: this.title,
      desc: this.desc,
      active: true
    }
    //Emmitting the event and passing todo
    this.todoAdd.emit(todo);
  }

}
