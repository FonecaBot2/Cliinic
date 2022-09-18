import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getReservas } from './reservas.model';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  constructor(private http: HttpClient){}

  get(): Observable<getReservas> {
    return this.http.get<getReservas>('https://equipoyosh.com/stock-nutrinatalia//reserva');
  }

}