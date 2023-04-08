import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../models/todo';
import { TodoOperation } from '../../../models/todo-operation';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input()
  todos!: Array<Todo>;

  @Output()
  todoAction: EventEmitter<TodoOperation> = new EventEmitter<TodoOperation>();

  onTodoEvent(todoOperation: TodoOperation): void {
    this.todoAction.emit(todoOperation);
  }
}
