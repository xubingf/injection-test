import {Component, EventEmitter, Input, Output} from "@angular/core";
import {HeroTaxReturnService} from "./hero-tax-return.service";
import {HeroTaxReturn} from "./hero";

@Component({
  selector: 'app-hero-tax-return',
  templateUrl: './hero-tax-return.component.html'
})
export class HeroTaxReturnComponent {
  message = '';
  constructor(private heroTaxReturnService: HeroTaxReturnService) {}
  @Output() close = new EventEmitter<void>();
  get taxReturn(): HeroTaxReturn {
    return this.heroTaxReturnService.taxReturn;
  }
  @Input()
  set taxReturn (htr: HeroTaxReturn) {
    this.heroTaxReturnService.taxReturn = htr;
  }
  onClose()  { this.close.emit(); };

  onSaved() {
    this.flashMessage('Saved');
    this.heroTaxReturnService.saveTaxReturn();
  }
  onCanceled() {
    this.flashMessage('Canceled');
    this.heroTaxReturnService.restoreTaxReturn();
  }
  flashMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 500);
  }
  }
