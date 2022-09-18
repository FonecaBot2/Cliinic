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
import { ServiciosComponent } from './servicios/servicios.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HorariosComponent } from './horarios/horarios.component';
import { HorariosExcepcionComponent } from './horarios-excepcion/horarios-excepcion.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
=======
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 2f16eacc424ba593bf8260b6391f5dc098948ccf

@NgModule({
  declarations: [AppComponent, CategoriasComponent, CrearCategoriasComponent, SubcategoriasComponent, ServiciosComponent, PacientesComponent, HorariosComponent, HorariosExcepcionComponent, ReservasComponent, FichaClinicaComponent],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
    ReactiveFormsModule
>>>>>>> 2f16eacc424ba593bf8260b6391f5dc098948ccf
  ],
  providers: [],
  bootstrap: [AppComponent, CategoriasComponent],
})
export class AppModule {}
