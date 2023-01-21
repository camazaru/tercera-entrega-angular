import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockamockapiService {

  constructor(private http: HttpClient ) { }

getUsers() {
    return this.http.get('https://63c8613c075b3f3a91dfe65f.mockapi.io/users')
    
 }

 getEstudiantes() {
  return this.http.get('https://63c8613c075b3f3a91dfe65f.mockapi.io/estudiantes')

  
}





}
