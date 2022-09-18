import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from './reservas.model';
import { ReservasService } from './reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  displayedColumns: string[] = ['fecha','inicio','final','empleado','cliente','opciones'];
  dataSource = new MatTableDataSource<Reserva>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data : Reserva, filter: string) => {
      return data.idEmpleado.nombre == filter || data.idCliente.nombre == filter;
    };
  }

  constructor(private service: ReservasService) {}

  ngOnInit() {
    this.get();
    
  }

  get(): void {
    this.service.get().subscribe(data=> this.dataSource.data = data.lista);
  }

  applyFilter(filterValue: string) {
    //filterValue = filterValue.trim(); // Remove whitespace
    //filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
