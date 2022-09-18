import { Injectable } from '@angular/core';
import { Categoria, getCategorias } from './categoria.model';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  deleteCategoria(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`https://equipoyosh.com/stock-nutrinatalia/categoria/${id}`);
  }
}
