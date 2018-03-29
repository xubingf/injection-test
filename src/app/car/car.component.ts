import {Component} from '@angular/core';
import {
  CarService, CarService2, CarService3, EngineService, EngineService2,
  TiresService
} from './car.service';

export class CarComponent {

}
@Component({
  selector: 'car-1',
  template: `
    <div>C:{{description}}</div>
  `,
  providers: [{provide: CarService, useClass: CarService3}]
})
export class Car1Component {
  description: string;
  constructor(public carService: CarService ) {
    this.description = `${carService.getCar().description}配置：${carService.name}`;
  }
}

@Component({
  selector: 'car-2',
  template: `<div>B:{{description}}</div>
  <car-1></car-1>`,
  providers: [{provide: CarService, useClass: CarService2},
    {provide: EngineService, useClass: EngineService2}]
})
 export class Car2Component {
  description: string;
  constructor(public  carService: CarService) {
    this.description = `${carService.getCar().description}配置：${carService.name}`;
  }
}

@Component({
  selector: 'car-3',
  template: `<div>A:{{description}}</div>
  <car-2></car-2>`
})
export class Car3Component {
  description: string;
  constructor(public carService: CarService) {
    this.description = `${carService.getCar().description}配置：${carService.name}`;
  }
}
@Component({
  selector: 'app-cars',
  template: `
  <h3>Cars</h3>
  <car-3></car-3>`
})
export class CarsComponent { }



export const carComponents = [
  CarsComponent,
  Car1Component, Car2Component, Car3Component
];


export const carServices = [
  CarService, EngineService, TiresService
];
