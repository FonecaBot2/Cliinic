import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from './categoria.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent {
  displayedColumns: string[] = ['id', 'descripcion', 'opciones'];
  dataSource = new MatTableDataSource<Categoria>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'id') {
        return item.idCategoria;
      } else {
        return item[property];
      }
    };
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriasService.getCategorias().subscribe(categorias => this.dataSource.data = categorias.lista);
  }
}
