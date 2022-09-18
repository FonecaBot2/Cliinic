import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialog } from '../shared/confirm-delete.component';
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

  constructor(private service: HorarioExcepcionService, private route: ActivatedRoute, private router: Router,private snackBar: MatSnackBar, private dialog: MatDialog,) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.service.get().subscribe(data=> this.dataSource.data = data.lista);
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.service.deleteHorarioExcepcion(id).subscribe(horarioexc => console.log(horarioexc));
        const a = document.createElement('a');
        a.click();
        a.remove();
        this.snackBar.open('Deleted', 'Close', {
          duration: 2000,
        });
      }
    });
  }

}
