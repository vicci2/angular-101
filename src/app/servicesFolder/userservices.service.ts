import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../expense/expenseModel';
import { HttpClient } from '@angular/common/http';
import { Users } from '../sign-up/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http: HttpClient) { }

  url :string= "http://127.0.0.1:8000"
 

// --------------My Observables--------------    
  getExpenses(){
    return this.http.get(this.url + "/user" );
  }
  postUser(users:Users){
    return this.http.post(this.url + "/user" ,users);
  }
  putUser(id:string,values:Expense){
    return this.http.put(this.url + "/expenses"+id,values);
  }
  deleteUser(items:any){
    return this.http.delete(this.url + "/expenses" ,items);
  }
// -------x-------My Observables------x--------   
}
