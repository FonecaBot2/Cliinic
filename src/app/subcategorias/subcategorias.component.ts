import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subcategoria } from './subcategoria.model';
import { SubcategoriasService } from './subcategorias.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialog } from '../shared/confirm-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(private categoriasService: SubcategoriasService, private route: ActivatedRoute, private router: Router,private snackBar: MatSnackBar, private dialog: MatDialog,) {}

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
        this.categoriasService.deleteSubcategoria(id).subscribe(subcategoria => console.log(subcategoria));
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
