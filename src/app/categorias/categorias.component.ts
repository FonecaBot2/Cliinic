import { Component, VERSION, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from './categoria.model';
import { CategoriasService } from './categorias.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialog } from '../shared/confirm-delete.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent {
  displayedColumns: string[] = ['id', 'descripcion', 'opciones'];
  dataSource = new MatTableDataSource<Categoria>();
  version = VERSION;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private categoriasService: CategoriasService, private route: ActivatedRoute, private router: Router,private snackBar: MatSnackBar, private dialog: MatDialog,) {}

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
        this.categoriasService.deleteCategoria(id).subscribe(categoria => console.log(categoria));
        const a = document.createElement('a');
        a.click();
        a.remove();
        this.snackBar.open('Deleted', 'Close', {
          duration: 2000,
        });
      }
    });
  }

  getCategorias(): void {
    this.categoriasService.getCategorias().subscribe(categorias => this.dataSource.data = categorias.lista);
  }
}
