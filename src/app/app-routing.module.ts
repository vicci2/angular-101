import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExpenseComponent} from '../app/expense/expense.component'
import {DashboardComponent} from '../app/dashboard/dashboard.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'expense',component:ExpenseComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'signUp',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
