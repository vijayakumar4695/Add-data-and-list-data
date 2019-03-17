import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      user={
        fname:'',
        lname:'',
        roll:'',
        mail:'',
        pass:'',
      }
 
  constructor() { }
    
  ngOnInit() {
    
  }
  logints(value){
    this.user.fname = value.fName;
    this.user.lname = value.lName;
    this.user.roll = value.roll;
    this.user.mail = value.mail;
    this.user.pass= value.pass;

    console.log(this.user)
    
  }
}
