import { Component, OnInit } from '@angular/core';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data=[];
  constructor() { }

  ngOnInit() {
    var b = JSON.parse(localStorage.getItem('user3'));
  console.log(b)
  for(var i=0;i<b.length;i++){
   this.data.push(b[i]) 
  }
  }

  del(value){
   console.log(value)
  }

}
