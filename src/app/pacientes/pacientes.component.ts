import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from './paciente.model';
import { PacientesService } from './pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  displayedColumns: string[] = ['nombre','apellido','telefono','ruc','cedula','tipoPersona','fechaNacimiento','opciones'];
  dataSource = new MatTableDataSource<Paciente>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private pacientesService: PacientesService) {}

  ngOnInit() {
    this.getSubategorias();
  }

  getSubategorias(): void {
    this.pacientesService.getPacientes().subscribe(pacientes=> this.dataSource.data = pacientes.lista);
  }

  applyFilter(filterValue: string) {
    //filterValue = filterValue.trim(); // Remove whitespace
    //filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
