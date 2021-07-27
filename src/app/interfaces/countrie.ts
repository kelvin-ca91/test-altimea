export interface ICurrency {
  code: String;
  name: String;
  symbol: String;
}
export interface ICountry {
  name: String;
  currencies: ICurrency[];
}
