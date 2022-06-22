import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { habitaciones } from 'src/app/ts/habitacion';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(private http: HttpClient) { }
  getHabitacion(){
    let url = "http://localhost:3500/cliente/r1/habitaciones/"
    return this.http.get<habitaciones[]>(url);
  }
  getHabitacionById(id:any){
    let url = "http://localhost:3500/cliente/r1/habitaciones/" + id;
    return this.http.get<habitaciones>(url);
  }
  postHabitacion(habitaciones:any){
    let url = "http://localhost:3500/cliente/r1/habitaciones/"
    return this.http.post(url,habitaciones);
  }
  putHabitacion(id:any,habitaciones:any){
    let url = "http://localhost:3500/cliente/r1/habitaciones/" + id;
    return this.http.put<habitaciones>(url,habitaciones);
  }
  patchHabitacion(id:any,habitaciones:any){
    let url = "http://localhost:3500/cliente/r1/habitaciones/" + id;
    return this.http.patch<habitaciones>(url,habitaciones);
  }
  deleteHabitacion(id:any){
    let url = "http://localhost:3500/cliente/r1/habitaciones/" + id;
    return this.http.delete(url)
  }
}
