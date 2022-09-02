import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
