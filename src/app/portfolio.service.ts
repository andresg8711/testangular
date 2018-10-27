import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, XHRConnection } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Portafolio } from './model/portafolio';
import { GLOBAL } from './global.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Injectable()
export class PortfolioService {
  public url: string;

  constructor(
    public _http: Http
  ) { 
    this.url = GLOBAL.url;
  }

  getDisponibles(){
    return this._http.get(this.url+'disponibles').map(res => res.json());
  }

  getDisponible(id){
    return this._http.get(this.url+'disponibles/'+id).map(res => res.json());
  }

  editDisponible(id, portafolio: Portafolio) {
    let json = JSON.stringify(portafolio);
    let params = 'json='+json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(this.url +'editar/'+id, params,{headers:headers}).map(res => res.json());
  }

  addPortafolio(portafolio: Portafolio){
    let json = JSON.stringify(portafolio);
    let params = 'json='+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post(this.url+'newDisponible',params,{headers:headers}).map(res => res.json());
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>){
    return new Promise((resolve, reject)=>{
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      for(var i = 0; i < files.length; i++){
        formData.append('uploads[]', files[i], files[i].name);
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      };
      
      xhr.open("POST",url,true);
      xhr.send(formData);

    });
  }
}
