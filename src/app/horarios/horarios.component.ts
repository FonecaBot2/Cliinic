import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialog } from '../shared/confirm-delete.component';
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

  constructor(private horarioAtencionService: HorarioAtencionService, private route: ActivatedRoute, private router: Router,private snackBar: MatSnackBar, private dialog: MatDialog,) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.horarioAtencionService.getHorarios().subscribe(data=> this.dataSource.data = data.lista);
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
        this.horarioAtencionService.deleteHorario(id).subscribe(horario => console.log(horario));
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
