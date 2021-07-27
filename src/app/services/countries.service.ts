import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ICountry } from '../interfaces/countrie';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  listCountries(): Promise<ICountry[]> {
    const url = `${environment.baseUrlCountry}/rest/v2/lang/es`;
    return this.http
      .get(url)
      .pipe(
        map((res: any) => {
          return res;
        })
      )
      .toPromise();
  }
}
