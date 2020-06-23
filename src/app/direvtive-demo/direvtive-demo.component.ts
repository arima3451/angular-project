import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direvtive-demo',
  templateUrl: './direvtive-demo.component.html',
  styleUrls: ['./direvtive-demo.component.css']
})
export class DirevtiveDemoComponent implements OnInit {


  yourName='akash';
  nameFlag=false;
  
 
  ngOnInit() {
  }
  onClickFun(){
    return this.nameFlag=true;
  }
  
}
