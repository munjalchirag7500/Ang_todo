import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule
  ],
})
export class AppModule { }


@NgModule({
  declarations: [DashboardComponent, LoginComponent, AddTodoComponent, EditTodoComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ReactiveFormsModule

  ]
})
export class ShopModule { }
