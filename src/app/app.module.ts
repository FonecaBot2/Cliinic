import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MaterialModule } from 'src/environments/material.module';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { CrearCategoriasComponent } from './categorias/crear-categorias/crear-categorias.component';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';

@NgModule({
  declarations: [AppComponent, CategoriasComponent, CrearCategoriasComponent, SubcategoriasComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent, CategoriasComponent],
})
export class AppModule {}
