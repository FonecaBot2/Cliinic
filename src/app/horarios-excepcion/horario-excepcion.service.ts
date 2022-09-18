import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getHorarioExcepcion } from './horario-excepcion.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioExcepcionService {
  constructor(private http: HttpClient){}

  get(): Observable<getHorarioExcepcion> {
    return this.http.get<getHorarioExcepcion>('https://equipoyosh.com/stock-nutrinatalia/horarioExcepcion');
  }

}