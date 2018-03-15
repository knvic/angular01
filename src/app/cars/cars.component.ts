import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {

  constructor() {
 }


cars: [{name: string, year: number }] = [
  {name : 'Ford', year: 2011},
  {name : 'Audi', year: 2011},
  {name : 'BMW', year: 2011},
  {name : 'Lada', year: 2011},
  ];

  addCarItem(car: {name: string, year: number }) {
    this.cars.push(car);
  }

}
