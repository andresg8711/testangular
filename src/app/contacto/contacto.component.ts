import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: '../empresa/empresa.component.html',
  styleUrls: ['../empresa/empresa.component.css']
})
export class ContactoComponent implements OnInit {
  public contacto: string;

  constructor() {
    this.contacto = 'Contactenos';
   }

  ngOnInit() {
  }

}
