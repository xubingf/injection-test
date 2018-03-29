import {Component} from "@angular/core";
import {Hero, HeroTaxReturn} from "../hero-tax/hero";

import {Observable} from "rxjs/Observable";
import {HeroService} from "../hero-tax/hero.service";


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styles: [ 'li {cursor: pointer;}' ]
})
export class HeroesListComponent {
  heroes: Observable<Hero[]>;
  selectedTaxReturns: HeroTaxReturn[] = [];
  constructor(private heroesService: HeroService) {
    this.heroes = heroesService.getHeroes();
  }

  showTaxReturn(hero: Hero) {
    this.heroesService.getTaxReturn(hero)
      .subscribe(htr => {
        if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
          this.selectedTaxReturns.push(htr);
        }
      });
  }

  closeTaxReturn(ix: number) {
    this.selectedTaxReturns.splice(ix, 1);
  }

}
