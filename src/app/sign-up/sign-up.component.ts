import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../servicesFolder/userservices.service';
import {FormGroup,FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService:UserservicesService) { }
  newUser:any
  addUser() {
    this.newUser = this.join.value
    this.userService.postUser(this.newUser)
    // console.log(this.newUser)
      .subscribe(user => { 
        console.log("New user details:",user)
        alert("Congrstulations dear "+ user +", your registration was a success")        
      });
  }  
  
join = new FormGroup({
  first_name:new FormControl(""),
  last_name:new FormControl(""),
  email:new FormControl("")
})

  ngOnInit(): void {
  }

}
