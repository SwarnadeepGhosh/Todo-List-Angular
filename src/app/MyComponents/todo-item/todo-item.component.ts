import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //Adding Input Decorator to receive todo from todos.component
  @Input() todo: Todo;
  @Input() i:number;

  //Emitting a event todoDelete, which will received by todos.component.ts and delete the todo from todos Array
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }
  ngOnInit(): void { }

  // Handling (click) event by onClick() method
  onClick(todo: Todo){
    //Emmitting the event
    this.todoDelete.emit(todo);
    console.log("onClick triggered")
  }
  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
  }
}
