import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getFichaClinica } from './ficha-clinica.model';

@Injectable({
  providedIn: 'root'
})
export class FichaClinicaService {
  constructor(private http: HttpClient){}

  get(): Observable<getFichaClinica> {
    return this.http.get<getFichaClinica>('https://equipoyosh.com/stock-nutrinatalia/fichaClinica');
  }

}