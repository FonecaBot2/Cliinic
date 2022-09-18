import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cliinic';
  logged: string;
  ngOnInit(){
    this.logged = localStorage.getItem('logged');
  };
  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
  
}
