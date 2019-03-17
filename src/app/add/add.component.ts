import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user1=[]
  dataentry:any={
     fname:"",
     lname:"",
     roll:"",
     email:"",
     pass:"",
  }

  constructor() { }

  ngOnInit() {
    console.log(this.dataentry)
    var b = JSON.parse(localStorage.getItem('user3'));
    console.log(b)
    for(var i=0;i<b.length;i++){
     this.user1.push(b[i])
  }
}
datats(){
  this.user1.push(this.dataentry)
  localStorage.setItem('user3',JSON.stringify(this.user1));
    console.log(this.user1)
}

}
