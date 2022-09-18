import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getHorarioAtencion, HorarioAtencion } from './horario.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioAtencionService {
  constructor(private http: HttpClient){}

  getHorarios(): Observable<getHorarioAtencion> {
    return this.http.get<getHorarioAtencion>('https://equipoyosh.com/stock-nutrinatalia/personaHorarioAgenda');
  }

  deleteHorario(id: number): Observable<HorarioAtencion> {
    return this.http.delete<HorarioAtencion>(`https://equipoyosh.com/stock-nutrinatalia/personaHorarioAgenda/${id}`);
  }

}