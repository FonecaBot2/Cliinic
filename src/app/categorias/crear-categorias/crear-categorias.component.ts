import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-crear-categorias',
  templateUrl: './crear-categorias.component.html',
  styleUrls: ['./crear-categorias.component.css']
})
export class CrearCategoriasComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private categoriasService: CategoriasService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'descripcion': [null, Validators.required],
    });
  }

  onSubmit() {
    this.categoriasService.postCategorias(this.formGroup.value.descripcion).subscribe(data => console.log(data));
    this.router.navigate(['../']);
    
  }
}


