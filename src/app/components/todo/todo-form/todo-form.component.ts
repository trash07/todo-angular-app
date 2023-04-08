import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  fsSave = faSave;
  todoForm!: FormGroup;
  isSubmitted: boolean = false;

  @Output()
  todoEmitter: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.todoForm = this.formBuilder.group({
      libelle: [null, [Validators.required]],
    });
    this.isSubmitted = false;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.todoForm.valid) {
      this.todoEmitter.emit(this.todoForm.value);
      this.createForm();
    }
  }
}
