import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent { 
  arrStr: String = "1,2,3,4,5";
  ascArr = this.arrStr.split(",").sort();
  descArr = this.arrStr.split(",").sort().reverse();
   
  onEnter () {
    this.ascArr = this.arrStr.split(",").sort();
    this.descArr = this.arrStr.split(",").sort().reverse();
  }
}
