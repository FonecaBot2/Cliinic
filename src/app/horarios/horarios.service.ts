import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getHorarioAtencion } from './horario.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioAtencionService {
  constructor(private http: HttpClient){}

  getHorarios(): Observable<getHorarioAtencion> {
    return this.http.get<getHorarioAtencion>('https://equipoyosh.com/stock-nutrinatalia/personaHorarioAgenda');
  }

}