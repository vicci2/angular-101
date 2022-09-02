import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../expense/expenseModel';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {  
  
  constructor(private http: HttpClient) { 
    
  }
  private _url :string= "http://127.0.0.1:8000"

  postExpense(items:Expense){
    return this.http.post(this._url + "/expenses/addExpense" ,items);
  }

  getExpenses(){
    return this.http.get(this._url + "/expenses" );
  }

}