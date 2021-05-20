import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Chemical Availability Aggregator';
  CAS = "";
  display = false;

clickme(){
    this.CAS = (<HTMLInputElement>document.getElementById("casFirst")).value + "-" + (<HTMLInputElement>document.getElementById("casMiddle")).value + "-" +  (<HTMLInputElement>document.getElementById("casLast")).value;
    this.display = true;
  }

}
