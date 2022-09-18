import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getPacientes, Paciente } from './paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private api: string = "/stock-nutrinatalia";

  constructor(private http: HttpClient){}

  getPacientes(): Observable<getPacientes> {
    return this.http.get<getPacientes>('https://equipoyosh.com/stock-nutrinatalia/persona');
  }

  postPaciente(
    nombre: string,
    apellido: string,
    email: string,
    telefono: number,
    ruc: number,
    cedula: number,
    tipoPersona: string,
    fechaNacimiento: Date): Observable<Paciente> {
    return this.http.post<Paciente>(
      'https://equipoyosh.com/stock-nutrinatalia/persona', {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        ruc: ruc,
        cedula: cedula,
        tipoPersona: tipoPersona,
        fechaNacimiento: fechaNacimiento+" 00:00:00"});
  }
}