import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo';
import { TodoAction, TodoOperation } from '../../../models/todo-operation';

@Component({
  selector: 'app-todo-management',
  templateUrl: './todo-management.component.html',
  styleUrls: ['./todo-management.component.css'],
})
export class TodoManagementComponent implements OnInit {
  todos: Array<Todo> = new Array<Todo>();
  private counter: number = 3;

  ngOnInit(): void {
    this.initTodos();
  }

  private initTodos(): void {
    this.todos = [
      { id: 1, libelle: 'Aller au champs' },
      { id: 2, libelle: 'Sarcler le maïs' },
    ];
  }

  saveTodo(todo: Todo): void {
    this.todos.push({ id: this.counter++, libelle: todo.libelle });
  }

  handleAction(todoOperation: TodoOperation) {
    if (todoOperation.operation === TodoAction.DELETE) {
      this.deleteTodo(todoOperation.operande);
    }
    if (todoOperation.operation == TodoAction.UPDATE) {
      this.updateTodo(todoOperation.operande);
    }
  }

  private deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter((t: Todo) => t.id != todo.id);
  }

  private updateTodo(todo: Todo): void {
    let element = this.todos.find((t: Todo) => t.id == todo.id);
    if (element) {
      element.libelle = todo.libelle;
    }
  }
}
