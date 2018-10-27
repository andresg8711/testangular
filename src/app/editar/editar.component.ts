import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { Portafolio } from '../model/portafolio';
import { GLOBAL } from '../global.service';
import { ResponseOptions } from '@angular/http';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-editar',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [PortfolioService]
})
export class EditarComponent implements OnInit {
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
    this.title = 'Editar Inmueble';
    this.portafolio = new Portafolio(0, '', '', '', '', 0);
  }

  ngOnInit() {
    console.log("Se cargo el componenete corrrectamente");
  }

  onSubmit() {
    console.log(this.portafolio);

    if (this.filesToUpload && this.filesToUpload.length >= 1) {

      this._portfolioservice.makeFileRequest(GLOBAL.url + 'generalimage', [], this.filesToUpload).then((result) => {
        console.log(result);
        this.resultUpload = result;
        this.portafolio.image = this.resultUpload.filename;
        this.updateProducto();
      }, (error) => {
        console.log(error);
      }
      );
    } else {
      this.updateProducto();
    }
  }

  updateProducto() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      if (this.portafolio.std == null)
        this.portafolio.std == 0;
      this._portfolioservice.editDisponible(id, this.portafolio).subscribe(
        response => {
          if (response.code == 200) {
            console.log(response);
            this._router.navigate(['/gestor']);
          } else {
            console.log(response);
          }
        },
        error => {
          console.log(<any>error);
        }
      )
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

  getProducto() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._portfolioservice.getDisponible(id).subscribe(
        result => {
          if (result.code == 200) {
            this.portafolio = result.data;
            console.log(result.data);
          }
          else {
            this._router.navigate(['/gestor'])
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

}
