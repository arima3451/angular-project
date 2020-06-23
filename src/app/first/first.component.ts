import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  // selector : '[app-first]',
  //selector : '.app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  serverId:number=10;
  serverName= 'akash';
  buttonValue:boolean=false;
  serverCreationStatus="No server created";
  server="";
  server1="Linux server";
  servers=['server1','server2']

  username:string="";
  userbutton:boolean=false;

  
  constructor() {
    setTimeout(()=>{
      this.buttonValue=true;
    },2000);
    
   }

  ngOnInit() {
  }
  gerServerName(){
    return this.serverName;
  }
  onCreateServer(){
    this.servers.push(this.serverName);
    return this.serverCreationStatus='Server Created server name is '+this.server1;
  }
  onUpdateServerName(event:Event){
    // console.log(event); we can fetch value using target.value in console
    this.server=(<HTMLInputElement>event.target).value;
  }
  // checkInputString(){
  //   console.log(this.username.length);
  //   if (this.username.length>0) {
  //     this.userbutton=true;
  //   }
  //   else{
  //     this.userbutton=false;
  //   }
  // }
  // onLoginClick(){
  //   this.username=null;
  // }

}
