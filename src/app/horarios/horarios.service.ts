import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  postHorario(p: HorarioAtencion): Observable<HorarioAtencion> {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'usuario': 'usuario1' });
  
      let options = { headers: headers };
    return this.http.post<HorarioAtencion>(
      '/stock-nutrinatalia/personaHorarioAgenda', p, options);
  }

}