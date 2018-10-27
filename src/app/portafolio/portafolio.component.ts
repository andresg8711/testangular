import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { Portafolio } from '../model/portafolio';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  providers: [PortfolioService]
})
export class PortafolioComponent implements OnInit {
  public titulo: string;
  public portfolio: Portafolio[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _portfolioservice: PortfolioService
  ) {
    this.titulo = 'PORTFOLIO';
   }

  ngOnInit() {
    console.log('Se ha cargado el componente inmuebles');

    this._portfolioservice.getDisponibles().subscribe(
      result => {

        if (result.code != 200) {
          console.log(result);
        }
        else {
          this.portfolio = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
