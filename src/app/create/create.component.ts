import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { Portafolio } from '../model/portafolio';
import { GLOBAL } from '../global.service';
import { ResponseOptions } from '@angular/http';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [PortfolioService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public portafolio: Portafolio;
  public filesToUpload;
  public resultUpload;

  constructor(
    private _location: Location,
    private _portfolioservice: PortfolioService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Crear Nuevo Inmueble';
    this.portafolio = new Portafolio(0, '', '', '', '', 0);
  }

  ngOnInit() {
    console.log('Se ha cargado el componente Nuevo Inmueble');
  }

  goBack() {

    this._location.back();

    console.log('goBack()...');
  }

  onSubmit() {
    console.log(this.portafolio);

    if (this.filesToUpload.length >= 1) {

      this._portfolioservice.makeFileRequest(GLOBAL.url + 'generalimage', [], this.filesToUpload).then((result) => {
        console.log(result);
        this.resultUpload = result;
        this.portafolio.image = this.resultUpload.filename;
        this.saveProducto();
      }, (error) => {
        console.log(error);
      }
      );
    } else {
      console.log('Falta Imagen');
    }
  }

  saveProducto() {
    this._portfolioservice.addPortafolio(this.portafolio).subscribe(
      response => {
        if (response.code == 200) {
          this._router.navigate(['/gestor']);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
