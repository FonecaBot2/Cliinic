import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private service: PacientesService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'nombre': [null, Validators.required],
      'apellido': [null, Validators.required],
      'email': [null, Validators.required],
      'telefono': [null, Validators.required],
      'ruc': [null, Validators.required],
      'cedula': [null, Validators.required],
      'tipoPersona': [null, Validators.required],
      'fechaNacimiento': [null, Validators.required], 
    });
  }

  onSubmit() {
    this.service.postPaciente(this.formGroup.value.nombre
      ,this.formGroup.value.apellido,
      this.formGroup.value.email,
      this.formGroup.value.telefono,
      this.formGroup.value.ruc,
      this.formGroup.value.cedula,
      this.formGroup.value.tipoPersona,
      this.formGroup.value.fechaNacimiento).subscribe(data => console.log(data));
    this.router.navigate(['./pacientes']);
    
  }

}
