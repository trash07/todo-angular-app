import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoManagementComponent} from "./components/todo/todo-management/todo-management.component";

const routes: Routes = [
  {path: '', component: TodoManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
