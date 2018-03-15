import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {

 canAddCar = false;
 addCarStatus = '';
  inputText = '';
  carName = '';
  carYear = null;

  addCarStatusNew = false;

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);

  }
cars: [{name: string, year: number }] = [
  {name : 'Ford', year: 2011},
  {name : 'Audi', year: 2011},
  {name : 'BMW', year: 2011},
  {name : 'Lada', year: 2011},
  ];

  pressButton() {
    this.addCarStatusNew = true;
    this.cars.push({name: this.carName, year: this.carYear});
    this.carName = '';
    this.carYear = null;
  }



  addCar() {
this.addCarStatus = 'Машина добавленв';
  }

  onKeyUp(event) {

    this.inputText = event.target.value;
  }


}
