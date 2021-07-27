import { Component } from '@angular/core';
import { ICountry, ICurrency } from './interfaces/countrie';
import { CountriesService } from './services/countries.service';
import { ExchangeService } from './services/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listCountries: ICountry[] = [];
  divisaInicial: String = 'EUR';
  divisaFinal: String = '';
  amount: number = 0;
  resultado: number | undefined;
  private exchangeList: any | undefined;
  constructor(
    private countrieService: CountriesService,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit() {
    this.loadCountries();
  }

  private async loadCountries() {
    this.listCountries = await this.countrieService.listCountries();
    this.calcExchange();
  }

  private async calcExchange() {
    this.exchangeList = await this.exchangeService.exchange();
  }

  changeAmount() {
    if (this.divisaFinal && this.amount) {
      const rate = this.exchangeList.rates[`${this.divisaFinal}`];
      this.resultado = rate * this.amount;
    } else {
      this.resultado = undefined;
    }
  }

  selectDivisaFinal() {
    this.changeAmount();
  }
}
