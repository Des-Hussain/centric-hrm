import { HttpClient, HttpHeaders, HttpResponse } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  urlBase = 'https://ec2-13-233-131-19.ap-south-1.compute.amazonaws.com';

  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient) { }

  setAuthToken() {
    let auth: string | null = '';
    auth = localStorage.getItem('token');
    this.headers.set('Authorization', `Bearer ${auth}`);
  }

  get(url: string) {
    this.setAuthToken();
    try {
      return this.http.get(this.urlBase + url, { headers: this.headers }).pipe(
        map((res: any) => {
          var data = res;
          return data;
        }),
        catchError((error: any) => {
          console.log("error:", error);
          return throwError(() => new Error(error));
        })
      );
    } catch (error:any) {
      return throwError(() => new Error(error.toString()));
    }
  }

  post(url: string, data: any) {  
    this.setAuthToken();
    try {
      return this.http.post(this.urlBase + url, data, { headers: this.headers}).pipe(
        map((res: any) => {
          var data = res.body;
          return data;
        }),
        catchError((error: any) => {
          console.log("error:", error);
          return throwError(() => new Error(error));
        })
      );
    } catch (error:any) {
      return throwError(() => new Error(error.toString()));
    }
  }

  put(url: string, data: any) { 
    this.setAuthToken();
    try {
      return this.http.put(this.urlBase + url, data, { headers: this.headers }).pipe(
        map((res: any) => {
          var data = res.body;
          return data;
        }),
        catchError((error: any) => {
          console.log("error:", error);
          return throwError(() => new Error(error));
        })
      );
    } catch (error:any) {
      return throwError(() => new Error(error.toString()));
    }
  }

  delete(url: string) { 
    this.setAuthToken();
    try {
      return this.http.delete(this.urlBase + url, { headers: this.headers }).pipe(
        map((res: any) => {
          var data = res.body;
          return data;
        }),
        catchError((error: any) => {
          console.log("error:", error);
          return throwError(() => new Error(error));
        })
      );
    } catch (error:any) {
      return throwError(() => new Error(error.toString()));
    }
  }


}
