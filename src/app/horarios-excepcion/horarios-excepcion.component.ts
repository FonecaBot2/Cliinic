import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HorarioExcepcion } from './horario-excepcion.model';
import { HorarioExcepcionService } from './horario-excepcion.service';

@Component({
  selector: 'app-horarios-excepcion',
  templateUrl: './horarios-excepcion.component.html',
  styleUrls: ['./horarios-excepcion.component.css']
})
export class HorariosExcepcionComponent implements OnInit {

  displayedColumns: string[] = ['fecha','apertura','cierre','intervalo','flag','empleado','opciones'];
  dataSource = new MatTableDataSource<HorarioExcepcion>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private service: HorarioExcepcionService) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.service.get().subscribe(data=> this.dataSource.data = data.lista);
  }
}
