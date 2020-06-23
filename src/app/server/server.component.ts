import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        border:2px solid black;
        padding:20px;
    }
   `]
})
export class ServerComponent{
    // title1 = 'My project';

    serverId:number=10;
    serverStatus:string="offline";
    colorName='';
    constructor() {
      this.serverStatus=Math.random()>0.5?'online':'offline';
     }
     getServerStatus(){
        return this.serverStatus;
      }
      getColor(){
        return this.colorName=this.serverStatus=='online'?'green':'red';
      }
  
}