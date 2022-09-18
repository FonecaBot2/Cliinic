import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HorarioAtencion } from './horario.model';
import { HorarioAtencionService } from './horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  displayedColumns: string[] = ['dia','apertura','cierre','intervalo','empleado','opciones'];
  dataSource = new MatTableDataSource<HorarioAtencion>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private horarioAtencionService: HorarioAtencionService) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.horarioAtencionService.getHorarios().subscribe(data=> this.dataSource.data = data.lista);
  }

}
