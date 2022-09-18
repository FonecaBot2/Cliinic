import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Paciente } from '../pacientes/paciente.model';
import { PacientesService } from '../pacientes/pacientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  public usuarios: any;
  public usuario: String;
  public contrasenha: String;

  
  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private pacientesService: PacientesService, private router: Router) {
    const aux = localStorage.getItem('logged');
    // if (aux){
    //   this.router.navigateByUrl('categorias');
    // }
  }

  async login(){
    this.usuarios = this.pacientesService.getPacientes();
    this.usuarios = await lastValueFrom(this.usuarios);
    
    console.log(this.usuarios.lista);
    for(let i = 0; i < this.usuarios.lista.length; i++){
      const element = this.usuarios.lista[i];
      if(this.usuario === element.email){
        localStorage.setItem('NombreUsuario', element.email);
        localStorage.setItem('usuarioId', element.idPersona)
        localStorage.setItem('logged', 'true')
        this.router.navigateByUrl('categorias');
        return
      }
    }

  }
  
}
