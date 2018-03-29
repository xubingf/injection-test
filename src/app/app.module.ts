import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {carComponents} from "./car/car.component";
import {carServices} from "./car/car.component";
import {HeroTaxReturnComponent} from "./hero-tax/hero-tax-return.component";
import {HeroTaxReturnService} from "./hero-tax/hero-tax-return.service";
import {HeroService} from "./hero-tax/hero.service";
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {VillainsListComponent} from "./massage-list/villains-list.component";

@NgModule({
  declarations: [
    AppComponent,
    carComponents,
    HeroTaxReturnComponent,
    HeroesListComponent,
    VillainsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [carServices,
  HeroTaxReturnService,
    HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
