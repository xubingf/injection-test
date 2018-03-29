
import {Injectable} from "@angular/core";
import {HeroTaxReturn} from "./hero";
import {HeroService} from "./hero.service";

@Injectable()
export class HeroTaxReturnService {
  private currentTaxReturn: HeroTaxReturn;
  private originalTaxReturn: HeroTaxReturn;

  constructor(private heroservice: HeroService) {
  }
  get taxReturn (): HeroTaxReturn {
    return this.currentTaxReturn;
  }
  set taxReturn (htr: HeroTaxReturn) {
    this.originalTaxReturn = htr;
    this.currentTaxReturn = htr.clone();
  }
  restoreTaxReturn() {
    this.taxReturn = this.originalTaxReturn;
  }
  saveTaxReturn() {
    this.taxReturn = this.currentTaxReturn;
    this.heroservice.saveTaxReturn(this.currentTaxReturn).subscribe();
  }
}
