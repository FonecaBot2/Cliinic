import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getServicio, Servicio } from './servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private api: string = "/stock-nutrinatalia";

  constructor(private http: HttpClient){}

  getServicios(): Observable<getServicio> {
    return this.http.get<getServicio>('https://equipoyosh.com/stock-nutrinatalia//servicio');
  }

}