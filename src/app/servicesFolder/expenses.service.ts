import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../expense/expenseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {  
  
  constructor(private http: HttpClient) { }

  url :string= "http://127.0.0.1:8000"
 

// --------------My Observables--------------    
  getExpenses(){
    return this.http.get(this.url + "/expenses" );
  }
  postExpense(items:Expense){
    return this.http.post(this.url + "/expenses" ,items);
  }
  putExpense(id:string,values:Expense){
    return this.http.put(this.url + "/expenses"+id,values);
  }
  deleteExpense(items:any){
    return this.http.delete(this.url + "/expenses" ,items);
  }
// -------x-------My Observables------x-------- 
}