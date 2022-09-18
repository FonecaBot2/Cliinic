import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subcategoria } from './subcategoria.model';
import { SubcategoriasService } from './subcategorias.service';


@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.css']
})
export class SubcategoriasComponent implements OnInit {

  displayedColumns: string[] = ['idProducto','descripcion', 'opciones'];
  dataSource = new MatTableDataSource<Subcategoria>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private categoriasService: SubcategoriasService) {}

  ngOnInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'idProducto') {
        return item.idTipoProducto;
      } else {
        return item[property];
      }
    };
    this.getSubategorias();
  }

  getSubategorias(): void {
    this.categoriasService.getSubcategorias().subscribe(subcategorias => this.dataSource.data = subcategorias.lista);
  }

}
