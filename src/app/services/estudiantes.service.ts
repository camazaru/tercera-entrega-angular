import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
url= "https://63c8613c075b3f3a91dfe65f.mockapi.io/estudiantes"

  constructor(private http: HttpClient) { }

  
putEstudiante(form:any):Observable<Response>{
  let direccion = this.url + "estudiantes";
  return this.http.put<Response>(direccion, form)
}

deleteEstudiante(form:any):Observable<Response>{
  let direccion = this.url + "estudiantes";
  let Options = {
    headers: new HttpHeaders({
'Conten-type': 'application/json'

    }),

body:from

  }
  return this.http.delete<Response>(direccion, Options)
}

postEstudiante(form:any):Observable<Response>{
  let direccion = this.url;
 
 return this.http.post<Response>(direccion, form)

 }


  
}

