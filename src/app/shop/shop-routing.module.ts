import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path:'add',component:AddTodoComponent
  },
  {
    path:'edit:id',component:AddTodoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
