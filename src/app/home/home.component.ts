import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  //itemCount: number = 4;
  //btnText: string = "Add an Items";
  //goalText: string = "my goal";
  //goals =[];

  constructor(private _data: DataService) {
    this._data.goal.subscribe(res => console.log(res));
   }

  ngOnInit() {
  }

  goToLink(type){
    console.log("hello");
    switch(type){
      case "facebook":
        window.location.href = "https://www.facebook.com/hyungwook.yuu";
      break;
      case "github":
        window.location.href = "https://github.com/yhw99go";
      break;
      case "linkedin": 
        window.location.href = "https://www.linkedin.com/in/danny-yu-423a43106";
      break;


    }   
   
  }
}
