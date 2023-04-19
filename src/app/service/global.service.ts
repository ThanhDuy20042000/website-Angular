import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private REST_API_SERVER = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any> {
    const url = `${this.REST_API_SERVER}/product`
    return this.httpClient.get<any>(url)
  }

  public postData(postDatabase: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/product`
    return this.httpClient.post<any>(url, postDatabase)
  }
}
