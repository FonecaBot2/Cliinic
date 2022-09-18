import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
import { HorariosExcepcionComponent } from './horarios-excepcion/horarios-excepcion.component';
import { HorariosComponent } from './horarios/horarios.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';


const routes: Routes = [
  {
    path: '',
    component: CategoriasComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'subcategorias',
    component: SubcategoriasComponent
  },
  {
    path: 'pacientes',
    component: PacientesComponent
  },
  {
    path: 'reservas',
    component: ReservasComponent
  },
  {
    path: 'horarios',
    component: HorariosComponent
  },
  {
    path: 'horarios-excepcion',
    component: HorariosExcepcionComponent
  },
  {
    path: 'fichas-clinicas',
    component: FichaClinicaComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }