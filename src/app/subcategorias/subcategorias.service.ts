import { Injectable } from '@angular/core';
import { Categoria, getCategorias } from '../categorias/categoria.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getSubcategorias, Subcategoria } from './subcategoria.model';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {

  constructor(private http: HttpClient) { }

  getSubcategorias(subcategoria?: Subcategoria): Observable<getSubcategorias> {
    return this.http.get<getSubcategorias>(
      'https://equipoyosh.com/stock-nutrinatalia/tipoProducto');
  }

  postCategorias(subcategoria: string): Observable<Subcategoria> {
    return this.http.post<Subcategoria>(
      'https://equipoyosh.com/stock-nutrinatalia/tipoProducto', {descripcion: subcategoria}
    );
  }

  deleteSubcategoria(idTipoProducto: number): Observable<Subcategoria> {
    return this.http.delete<Subcategoria>(`https://equipoyosh.com/stock-nutrinatalia/tipoProducto/${idTipoProducto}`);
  }
  
}
