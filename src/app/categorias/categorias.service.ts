import { Injectable } from '@angular/core';
import { Categoria, getCategorias } from './categoria.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<getCategorias> {
    return this.http.get<getCategorias>(
      'https://equipoyosh.com/stock-nutrinatalia/categoria'
    );
  }

  postCategorias(categoria: string): Observable<Categoria> {
    return this.http.post<Categoria>(
      'https://equipoyosh.com/stock-nutrinatalia/categoria', {descripcion: categoria}
    );
  }
}
