import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getHorarioExcepcion, HorarioExcepcion } from './horario-excepcion.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioExcepcionService {
  constructor(private http: HttpClient){}

  get(): Observable<getHorarioExcepcion> {
    return this.http.get<getHorarioExcepcion>('https://equipoyosh.com/stock-nutrinatalia/horarioExcepcion');
  }

  deleteHorarioExcepcion(id: number): Observable<HorarioExcepcion> {
    return this.http.delete<HorarioExcepcion>(`https://equipoyosh.com/stock-nutrinatalia/horarioExcepcion/${id}`);
  }

}