import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorarioAtencion } from '../horario.model';
import { HorarioAtencionService } from '../horarios.service';

@Component({
  selector: 'app-crear-horario',
  templateUrl: './crear-horario.component.html',
  styleUrls: ['./crear-horario.component.css']
})
export class CrearHorarioComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private service: HorarioAtencionService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'dia': [null, Validators.required],
      'horaAperturaCadena': [null, Validators.required],
      'horaCierreCadena': [null, Validators.required],
      'intervaloMinutos': [null, Validators.required],
      'idPersona': [null, Validators.required],
    });
  }

  onSubmit() {
    let p = new HorarioAtencion
    
    p.dia=this.formGroup.value.dia
    p.horaAperturaCadena=this.formGroup.value.horaAperturaCadena
    p.horaCierreCadena=this.formGroup.value.horaCierreCadena
    p.intervaloMinutos=this.formGroup.value.intervaloMinutos
    p.idEmpleado={
      idPersona: this.formGroup.value.idPersona
    }
    this.service.postHorario(p).subscribe(data => console.log(data));
    this.router.navigate(['./horarios']);
    
  }

}
