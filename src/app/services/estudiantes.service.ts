import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) { }

  

  postEstudiantes(url:string, body:any) {
    return this.http.post('https://63c8613c075b3f3a91dfe65f.mockapi.io/users', body )
  
}
}
