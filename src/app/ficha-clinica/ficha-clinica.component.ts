import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FichaClinica } from './ficha-clinica.model';
import { FichaClinicaService } from './ficha-clinica.service';

@Component({
  selector: 'app-ficha-clinica',
  templateUrl: './ficha-clinica.component.html',
  styleUrls: ['./ficha-clinica.component.css']
})
export class FichaClinicaComponent implements OnInit {

  displayedColumns: string[] = ['fecha','profesional','cliente','categoria','subcategoria','opciones'];
  dataSource = new MatTableDataSource<FichaClinica>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private service: FichaClinicaService) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.service.get().subscribe(data=> this.dataSource.data = data.lista);
  }
}
