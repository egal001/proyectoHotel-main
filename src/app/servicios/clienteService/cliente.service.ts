import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clienteReserva } from 'src/app/ts/clienteReserva';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  getCliente(){
    let url = "http://localhost:3500/cliente/r1/clientes/"
    return this.http.get<clienteReserva[]>(url);
  }
  getClienteById(id:any){
    let url = "http://localhost:3500/cliente/r1/clientes/" + id;
    return this.http.get<clienteReserva>(url);
  }
  postCliente(clienteReserva:any){
    let url = "http://localhost:3500/cliente/r1/clientes/"
    return this.http.post(url,clienteReserva);
  }
  putCliente(id:any,clienteReserva:any){
    let url = "http://localhost:3500/cliente/r1/clientes/" + id;
    return this.http.put<clienteReserva>(url,clienteReserva);
  }
  patchCliente(id:any,clienteReserva:any){
    let url = "http://localhost:3500/cliente/r1/clientes/" + id;
    return this.http.patch<clienteReserva>(url,clienteReserva);
  }
  deleteCliente(id:any){
    let url = "http://localhost:3500/cliente/r1/clientes/" + id;
    return this.http.delete(url)
  }
}
