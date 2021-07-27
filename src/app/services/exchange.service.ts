import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private http: HttpClient) {}

  exchange(): Promise<any> {
    const url = `${environment.baseUrlExchange}/v1/latest?access_key=${environment.keyExchange}`;
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
