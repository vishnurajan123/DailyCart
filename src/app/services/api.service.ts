import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  getAllproductsAPI(){
    return this.http.get(`${this.SERVER_URL}/products/all`)
  }
  registerAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/user/register`,user)
  }
 loginAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/user/login`,user)
  }
}
