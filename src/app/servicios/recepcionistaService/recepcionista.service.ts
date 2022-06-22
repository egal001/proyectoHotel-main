import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recepcionista } from 'src/app/ts/recepcionista';

@Injectable({
  providedIn: 'root'
})
export class RecepcionistaService {

  constructor(private http: HttpClient) { }
  getRecepcionistas(){
    let url = "http://localhost:3500/cliente/r1/recepcionistas/"
    return this.http.get<recepcionista[]>(url);
  }
  getRecepcionistaById(id:any){
    let url = "http://localhost:3500/cliente/r1/recepcionistas/" + id;
    return this.http.get<recepcionista>(url);
  }
  postRecepcionista(recepcionista:any){
    let url = "http://localhost:3500/cliente/r1/recepcionistas/"
    return this.http.post(url,recepcionista);
  }
  putRecepcionista(id:any,recepcionista:any){
    let url = "http://localhost:3500/cliente/r1/recepcionistas/" + id;
    return this.http.put<recepcionista>(url,recepcionista);
  }
  patchRecepcionista(id:any,recepcionistas:any){
    let url = "http://localhost:3500/cliente/r1/recepcionistas/" + id;
    return this.http.patch<recepcionista>(url,recepcionistas);
  }
  deleteRecepcionista(id:any){
    let url = "http://localhost:3500/cliente/r1/recepcionistas/" + id;
    return this.http.delete(url)
  }
}
