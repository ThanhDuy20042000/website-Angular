import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2'; //alert Notification

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // private REST_API_SERVER = 'http://localhost:3000'
  private jsonUrl = 'https://thanhduy20042000.github.io/JS-Serve/db.json';

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any> {
    return this.httpClient.get<any>(this.jsonUrl)
  }


  public postData(postDatabase: any): Observable<any> {
    // return this.httpClient.post<any>(this.jsonUrl)
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<any>(this.jsonUrl, postDatabase, { headers: headers });
  }


  public successNotification(noitifiCation: string = '') { //Success
    Swal.fire('Success', noitifiCation, 'success');
  }

  public errorNotification(noitifiCation: string = '') { //Success
    Swal.fire('Error', noitifiCation, 'error');
  }
}
