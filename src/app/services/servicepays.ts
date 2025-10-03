import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay,Observable } from 'rxjs';

export interface pay {
  name : string;
  iso2 :string;
  employment_services:number;
  capital: string;
  forested_area :number;
  tourists: number;
  exports:number;
  population:number;
  fertility:number;
  refugees:number;
  telephone_country_codes:number;

}

@Injectable({
  providedIn: 'root'
})
export class Servicepays {
  private apiurl = 'https://api.api-ninjas.com/v1/country';
  private http = inject (HttpClient);
  
   getCountry(name:string): Observable<pay[]> {
    return this.http.get<pay[]>(`${this.apiurl}?name=${name}`).pipe(delay(1000));
  }


  
}
