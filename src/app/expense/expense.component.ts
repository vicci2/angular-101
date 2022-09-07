import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup,FormControl, NgForm} from '@angular/forms';
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
  checker: boolean = true;
  currentID :any;
  // Now we wanna populate our target form with the details of the selected items
  // @ViewChild("newitems") form :FormGroup;
  editMode:boolean = false
  joinMode:boolean = false
// -----x----- Local variables -------x------- 
  constructor(private injectedService : ExpensesService) {
    this.showExpenses()
    } 
// --------------My Subscriptions--------------
  showExpenses() {
    this.injectedService.getExpenses()
      .subscribe((data: any) => { 
        this.myexpenses = data
        // console.log("expenses is:",this.myexpenses)
      });
  }
  newExpense:any
  addExpense() {
    // if(this.editMode)
      this.newExpense = this.newitems.value     
      this.injectedService.postExpense(this.newExpense)
        .subscribe(items => { 
          this.myexpenses.push(items)
          console.log("New item details:",items)
          alert(items.valueOf())
        });
  }  

  deleteExpense(id:string){
    
  }
  newerExpense:any
  editExpense(id:string){
    this.currentID=id
    // First u wanna get the target expense only 
    let currentItem = this.myexpenses.find((e_id)=>{return e_id.id == id});
    console.log("Current item",currentItem)
    // Then populate the create expense form with the details of the iteem
    this.newitems.setValue({
      userId:currentItem.userId,
      expense:currentItem.expense,
      quantity:currentItem.quantity,
      cost:currentItem.cost
    })    
    // Change the target button and header
    this.editMode = true
    if (this.editMode=true)
      this.newerExpense=this.newitems.value
      console.log("Put items :",this.newerExpense)
      this.injectedService.putExpense(this.currentID,this.newerExpense)          
      .subscribe(info =>{
        console.log("Update info",info)
        // console.log(this.currentID)       
    });
  }
  clearExpense(){

  }
// -------x-------My Subscriptions------x--------  

// --------------Custom functions--------------  
  sayMessage() {
    this.expense_string = " Hi Vicci";
  }  
// -------x-------Custom functions ------x--------    

  newitems = new FormGroup({
    userId:new FormControl(""),
    expense:new FormControl(""),
    quantity:new FormControl(""),
    cost:new FormControl("")
  })
  
  ngOnInit(): void {
    
  }
}