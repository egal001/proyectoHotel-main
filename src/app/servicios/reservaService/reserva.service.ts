import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reserva } from 'src/app/ts/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }
  getReserva(){
    let url = "http://localhost:3500/cliente/r1/reservas/"
    return this.http.get<reserva[]>(url);
  }
  getReservaById(id:any){
    let url = "http://localhost:3500/cliente/r1/reservas/" + id;
    return this.http.get<reserva>(url);
  }
  postReserva(reserva:any){
    let url = "http://localhost:3500/cliente/r1/reservas/"
    return this.http.post(url,reserva);
  }
  putReserva(id:any,reserva:any){
    let url = "http://localhost:3500/cliente/r1/reservas/" + id;
    return this.http.put<reserva>(url,reserva);
  }
  patchReserva(id:any,reserva:any){
    let url = "http://localhost:3500/cliente/r1/reservas/" + id;
    return this.http.patch<reserva>(url,reserva);
  }
  deleteReserva(id:any){
    let url = "http://localhost:3500/cliente/r1/reservas/" + id;
    return this.http.delete(url)
  }
}
