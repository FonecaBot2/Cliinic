import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Servicio } from './servicio.model';
import { ServiciosService } from './servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  displayedColumns: string[] = ['idFecha','idFicha','fechaFicha','profesional','cliente','categoria','opciones'];
  dataSource = new MatTableDataSource<Servicio>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit() {
    this.getSubategorias();
  }

  getSubategorias(): void {
    this.serviciosService.getServicios().subscribe(servicios=> this.dataSource.data = servicios.lista);
  }
}
