import {Injectable} from "@angular/core";

export class Car {
    name= 'dazhong';
    constructor(public engine: Engine,
                public tires: Tires) {
    }
    get description() {
      return `${this.name} car with ` +
        `${this.engine.cylinders} cylinders and ${this.tires.made} tires.`;
    }
}

export class Engine {
  cylinders = 4;
}

export class Tires {
  made= 'China';
  model= 'Square';
}

@Injectable()
export class EngineService {
  id = 'E1';
  getEngine() {
    return new Engine();
  }
}

@Injectable()
export class EngineService2 {
  id = 'E2';
  getEngine() {
    let eng = new Engine();
    eng.cylinders = 8;
    return eng;
  }
}

@Injectable()
export  class TiresService {
  id = 'T1';
  getTires() {
    return new Tires();
  }
}

@Injectable()
export class CarService {
  id = 'C1';
  constructor(public tiresService: TiresService,
              public engineService: EngineService) {}
  getCar() {
    return new Car(this.engineService.getEngine(),
      this.tiresService.getTires());
  }
  get name() {
    return `${this.id}${this.tiresService.id}${this.engineService.id}`;
  }
}

@Injectable()
export class CarService2 extends CarService {
  id= 'C2';
  constructor(public tiresService: TiresService,
              public engineService: EngineService) {
    super(tiresService, engineService);
  }
 getCar() {
    const car = super.getCar();
    car.name = 'Chizzamm Motors, Calico UltraMax Supreme';
    return car;
 }
}


@Injectable()
export class CarService3 extends CarService2 {
  id = 'C3';
  constructor(
    public tiresService: TiresService,
 public engineService: EngineService) {
    super( tiresService, engineService);
  }
  getCar() {
    const car = super.getCar();
    car.name = 'Chizzamm Motors, Calico UltraMax Supreme';
    return car;
  }
}
