import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { ExpensesService } from '../servicesFolder/expenses.service';
import { Expense } from './expenseModel';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

// --------- Local variables  -----------
  myexpenses:any[]= []
  expense_string :any = "Welcome to Vicci";
// -----x----- Local variables -------x------- 
  constructor(private injectedService : ExpensesService) {
    this.showExpenses()
    this.addExpense()
    // console.log("Last step:",this.myexpenses)
    console.log("Last step:",this.newExpense)
    } 
  checker: boolean = true;
// --------------My Subscriptions--------------
  showExpenses() {
    this.injectedService.getExpenses()
      .subscribe((data: any) => { 
        this.myexpenses = data
        console.log("expenses is:",this.myexpenses)
      });
  }

  newExpense:any
  addExpense() {
    this.newExpense = this.newitems.value
    this.injectedService.postExpense(this.newExpense)
      .subscribe(items => { 
        this.myexpenses.push(items)
        console.log("New item details:",items)
      });
  }
// -------x-------My Subscriptions------x--------  

// --------------Custom functions--------------
  
  sayMessage() {
    this.expense_string = " Hi Vicci";
  }  
// -------x-------Custom functions ------x--------    

  itemsformgroup = new FormGroup({
    name:new FormControl(""),
    amount:new FormControl(""),
    category:new FormControl(""),
    date:new FormControl("")
  })
  newitems = new FormGroup({
    uid:new FormControl(""),
    expense:new FormControl(""),
    quantity:new FormControl(""),
    cost:new FormControl("")
  })
  
  ngOnInit(): void {
    
  }
}