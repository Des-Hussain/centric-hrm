import { Injectable } from '@angular/core';
import { HttpService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpSerivce:HttpService) { }

  getDashboard(){
    return this.httpSerivce.get('dashboard');
  }
}
