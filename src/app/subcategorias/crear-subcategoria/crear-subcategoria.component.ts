import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubcategoriasService } from '../subcategorias.service';

@Component({
  selector: 'app-crear-subcategoria',
  templateUrl: './crear-subcategoria.component.html',
  styleUrls: ['./crear-subcategoria.component.css']
})
export class CrearSubcategoriaComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private categoriasService: SubcategoriasService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'idCategoria': [null, Validators.required],
      'descripcion': [null, Validators.required],
    });
  }

  onSubmit() {
    this.categoriasService.postCategorias(this.formGroup.value.idCategoria,this.formGroup.value.descripcion).subscribe(data => console.log(data));
    this.router.navigate(['./subcategorias']);
    
  }

}
