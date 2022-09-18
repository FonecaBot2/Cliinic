import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  nombreUsuario: string;

  constructor(private router:Router) {
    this.nombreUsuario = localStorage.getItem('NombreUsuario');
   }

  ngOnInit(): void {
    localStorage.setItem('NombreUsuario', '')
    localStorage.setItem('logged', 'false')
    this.router.navigateByUrl('');
  }

}
