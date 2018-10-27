import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  public contacto: string;
  constructor() {
    this.contacto = 'Contacto';
   }

  ngOnInit() {
  }

}
