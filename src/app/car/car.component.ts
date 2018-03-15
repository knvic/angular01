import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  {

  carName  = 'Ford';
  year = '2017';

getName() {
  return this.carName;
}

}