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

  addCarStatusNew = false;

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);

  }
cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada'];
  pressButton() {
    this.addCarStatusNew = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  items = [{id: 4, name: 'петя'}, {id: 78, name: 'Вася'}, {id: 4, name: 'Коля'}];
  private a: boolean;

  addCar() {
this.addCarStatus = 'Машина добавленв';
  }

  onKeyUp(event) {

    this.inputText = event.target.value;
  }


  setBigText(car){
    this.a = false;
    if(car.length > 4){
      this.a = true;
      return this.a ;
    }

  }
}
