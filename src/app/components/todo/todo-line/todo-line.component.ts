import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../../models/todo';
import { TodoAction, TodoOperation } from '../../../models/todo-operation';
import {
  faCancel,
  faEdit,
  faSave,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';

@Component({
  selector: '[app-todo-line]',
  templateUrl: './todo-line.component.html',
  styleUrls: ['./todo-line.component.css'],
})
export class TodoLineComponent implements OnInit {
  @Input()
  todo!: Todo;

  @Output()
  todoEvent: EventEmitter<TodoOperation> = new EventEmitter<TodoOperation>();

  isEdit: boolean = false;
  todoControl!: FormControl;
  faEdit = faEdit;
  faTrash = faTrash;
  faSave = faSave;
  faCancel = faCancel;

  ngOnInit(): void {}

  editTodo() {
    this.isEdit = true;
    this.todoControl = new FormControl(this.todo.libelle);
  }

  deleteTodo(todo: Todo) {
    this.todoEvent.emit({
      operande: todo,
      operation: TodoAction.DELETE,
    });
  }

  cancelEdit(): void {
    this.isEdit = false;
    this.todoControl = new FormControl();
  }

  saveEdit(): void {
    if (this.todoControl.valid) {
      this.todoEvent.emit({
        operation: TodoAction.UPDATE,
        operande: { ...this.todo, libelle: this.todoControl.value },
      });
      this.isEdit = false;
      this.todoControl = new FormControl();
    } else {
      alert(`Formulaire invalide`);
    }
  }
}
